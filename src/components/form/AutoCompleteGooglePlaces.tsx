import React, {useCallback, useEffect, useRef, useState} from 'react';

import AutoComplete, {Option} from "./AutoComplete";

export interface GooglePlacesOption extends Option {
    info: any
}

interface ComponentProps {
    label?: string,
    grow?: boolean,
    placeholder?: string,
    onSelect: (location:GooglePlacesOption|null) => boolean|void,
    defaultValue?: GooglePlacesOption,
    selectOnBlur?: boolean,
    [key:string]: any
}

const w:any = window;

const AutoCompleteGooglePlaces = ({...props}:ComponentProps) => {
    const [input, setInput] = useState('');
    const callbackRef = useRef<any>(null);

    useEffect(() => {
        if (!input)
            return;

        const service = new w.google.maps.places.AutocompleteService();

        service.getPlacePredictions({
            input,
            types: ['address']
        }, (predictions: any /*google.maps.places.QueryAutocompletePrediction[] | null*/,
                                                          status: any /*google.maps.places.PlacesServiceStatus*/) => {
            if (status !== 'OK' || !callbackRef.current)
                return;

            callbackRef.current(predictions.map((info:any) => ({
                id: info.description,
                label: info.description,
                info
            })));
        });
    }, [input]);

    const onInputChange = useCallback((input:string, callback:(options:GooglePlacesOption[]) => void) => {
        setInput(input);

        if (!input)
            return Promise.resolve([]);

        callbackRef.current = callback;
    }, [setInput, callbackRef]);

    return (
        <AutoComplete<GooglePlacesOption> onInputChange={onInputChange} {...props}/>
    )
};

export default AutoCompleteGooglePlaces;