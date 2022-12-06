import React, {forwardRef, Ref, useState} from 'react';
import styled from 'styled-components';
import {FaEye} from 'react-icons/fa';

import {propFn} from "../../lib/theme";

import Label from './Label';
import Required from './Required';

const property = propFn('input');

const InputRow = styled.div`
    display: flex;
    align-items: center;
    
    & > svg {
        font-size: 20px;
        margin-left: .5em;
        cursor: pointer;
    }
`;

export const StyledInput = styled.input`
    box-sizing: border-box;
    font-weight: normal;
    display: block;
    margin-top: 4px;
    background: ${property('background')};
    border: ${property('border')};
    padding: 0 10px;
    outline: none;
    width: 100%;
    height: ${property('height')};
    
    &:focus {
      background: #def;
    }
`;

export interface ComponentProps {
    label?: string,
    grow?: boolean,
    className?: string,
    labelStyle?: any,
    [name:string]: any
}

export function formatValue(type:string, value:string) {
    switch (type.toLowerCase()) {
        case 'tel':
            return formatPhoneNumber(value);
        case 'numeric':
            return value.replace(/\D+/g, '');
        case 'decimal':
            return value.replace(/[^.0-9]+/g, '');
        default:
            return value;
    }
}

export function getPattern(type:string, props:any) {
    if (props.pattern)
        return props.pattern;

    switch (type.toLowerCase()) {
        case 'tel':
            return '^\\(\\d{3}\\) \\d{3}-\\d{4}$';
        case 'numeric': {
            const {minLength = '', maxLength = ''} = props;

            if (minLength || maxLength)
                return `^\\d{${minLength},${maxLength}}$`;
            else
                return '^\\d*$';
        }
        case 'decimal': {
            return `^\\d*(?:\\.\\d+)?$`;
        }
        default:
            return undefined;
    }
}

const Input = forwardRef(({label, value, grow=false, onChange, type='text', className, labelStyle, ...props}: ComponentProps, ref:Ref<any>) => {
    const pattern = getPattern(type, props);

    const changeHandler = (e:any) => {
        const value = formatValue(type, e.target.value);

        e.target.value = value;

        if (typeof onChange === 'function') {
            onChange({
                target: {
                    name: e.target.name,
                    value: value
                }
            });
        }
    };

    const actualType = /^numeric|decimal$/.test(type) ? 'text' : type;

    const [showPassword, setShowPassword] = useState(false);

    return (
        <Label grow={grow} className={className} style={labelStyle}>
            {label}{label && props.required && <Required/>}
            <InputRow>
                <StyledInput
                    {...props}
                    value={value}
                    onChange={changeHandler}
                    pattern={pattern}
                    type={showPassword ? 'text' : actualType}
                    ref={ref}
                    className={actualType !== 'password' ? 'LoNotSensitive' : ''}
                />
                {actualType === 'password' && <FaEye onClick={() => setShowPassword(value => !value)}/>}
            </InputRow>
        </Label>
    );
});

export default Input;



export function formatPhoneNumber(input:string) {
    const value = input
        .replace(/\D+/g, '')
        .replace(/^1/, '');

    const areaCode = value.substring(0, 3);
    const prefix = value.length > 3 ? value.substring(3, 6) : '';
    const number = value.length > 6 ? value.substring(6, 10) : '';

    if (number)
        return `(${areaCode}) ${prefix}-${number}`;
    else if (prefix)
        return `(${areaCode}) ${prefix}`;
    else if (areaCode)
        return `(${areaCode}`;
    else
        return '';
}
