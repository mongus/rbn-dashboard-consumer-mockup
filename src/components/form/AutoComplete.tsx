import React, {useCallback, useEffect, useState} from "react";
import styled from "styled-components";

import {StyledInput} from './Input';
import Label from './Label';
import Required from './Required';

export interface Option {
    id: string,
    label: string
}

interface OptionsProps<T> {
    options: Array<T>|null,
    highlight: number,
    setHighlight: (i:number) => void,
    onSelect: (option:T) => void,
}

const OptionsPopup = styled.ul`
    position: absolute;
    top: 100%;
    z-index: 32765;
    background: #fff;
    color: #000;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    list-style: none;
    font-weight: normal;
    border: 1px solid #ccc;
    
    li {
      padding: .5rem .5rem;
      cursor: pointer;
      white-space: nowrap;
    }
    
    li.heading {
      background-color: ${({theme:{accent}}) => accent};
      color: #fff;
    }
    
    li.highlight {
      color: #fff;
      background-color: ${({theme:{accent}}) => accent};
    }
`;

const Options = <T extends Option>({options, highlight, setHighlight, onSelect}:OptionsProps<T>) => {
    if (!(options && options.length > 0))
        return null;

    return (
        <OptionsPopup>
            {options.map((option, i) => {

                if (!option.id) {
                    return (
                        <li key={option.label} className="heading">{option.label}</li>
                    );
                }
                else {
                    return (
                        <li
                            key={option.label}
                            onMouseDown={() => onSelect(option)}
                            className={highlight === i ? 'highlight' : ''}
                            onMouseEnter={() => setHighlight(i)}
                        >
                            {option.label}
                        </li>
                    );
                }
            }
        )}
        </OptionsPopup>
    );
};

const StyledLabel = styled(Label)`
    position: relative;
`;

export interface AutoCompleteProps<T> {
    defaultValue?: T|undefined,
    onInputChange: (input:string, callback:(options:T[]) => void) => Promise<Array<T>>|void,
    onSelect: (value:T|null) => boolean|string|void,
    label?: string,
    grow?: boolean,
    placeholder?: string,
    selectOnBlur?: boolean,
    value?: T,
    [key:string]: any
}

const AutoComplete = <T extends Option>({label, value, grow=false, onInputChange, onSelect:_onSelect, defaultValue, selectOnBlur, ...props}:AutoCompleteProps<T>) => {
    const [input, setInput] = useState((defaultValue && defaultValue.label) || '');
    const [options, setOptions] = useState<Array<T>|null>(null);
    const [selected, setSelected] = useState<T|null>(defaultValue || null);
    const [highlight, setHighlight] = useState(0);

    const clear = () => {
        setHighlight(0);
        setOptions(null);
    };

    const onSelect = useCallback((option:T|null) => {
        const r = _onSelect(option);

        if (option && r && typeof r === 'string')
            option = Object.assign({}, option, {label:r});
        else if (r === '') {
            setInput('');
            return;
        }
        else if (!(r || typeof r === 'undefined'))
            return;

        setSelected(option);

        if (option)
            setInput(option.label);

        clear();
    }, [_onSelect]);

    useEffect(() => {
        if (value)
            onSelect(value);
    }, [value, onSelect]);

    const callback = useCallback((options:T[]) => {
        setOptions(options);
        setHighlight(0);
    }, [setOptions, setHighlight]);

    useEffect(() => {
        if (selected && selected.label === input)
            return;

        // @ts-ignore
        if (selected && onSelect(null)) {
            setSelected(null);
        }

        const promise = onInputChange(input, callback);

        if (promise)
            promise
            .then(setOptions)
            .then(() => setHighlight(0));
    }, [input, onInputChange, onSelect, selected, callback]);

    const inputChangeHandler = (e:any) => {
        setInput(e.target.value);
    };

    const handleBlur = () => {
        if (selectOnBlur && options && options.length > 0) {
            onSelect(options[highlight]);
        }
        else {
            clear();
        }
    };

    const handleKeyDown = (e:any) => {
        const key = e.keyCode || e.which;

        switch(key) {
            case 9:  // <TAB>:
            case 13: // <ENTER>:
                if (options && options.length > 0) {
                    onSelect(options[highlight]);
                }
                break;
            case 38: // <UP ARROW>
                if (highlight > 0)
                    setHighlight(highlight - 1);
                break;
            case 40: // <DOWN ARROW>
                if (options && options.length > highlight + 1)
                    setHighlight(highlight + 1);
                break;

        }
    };

    const handleFocus = (e:any) => {
        // select the text for easier editing
        e.target.select();
    }

    return (
        <StyledLabel grow={grow}>
            {label}{label && props.required && <Required/>}
            <StyledInput
                {...props}
                value={input}
                onChange={inputChangeHandler}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                autoComplete="no"
                className="LoNotSensitive"
            />
            <Options options={options} highlight={highlight} setHighlight={setHighlight} onSelect={onSelect}/>
        </StyledLabel>
    );
};

export default AutoComplete;