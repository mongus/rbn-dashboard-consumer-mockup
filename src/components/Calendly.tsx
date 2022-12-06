import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import Spinner from "./Spinner";
import {api, JWT_KEY} from "../config";

const w:any = window;

const Wrapper = styled.div`
    height: 800px;
`;

interface Props {
    url: string,
    onScheduled?: () => void
}

const Calendly:React.FC<Props> = ({url, onScheduled}) => {
    const [scriptLoaded, setScriptLoaded] = useState(!!w.Calendly);
    const initializedRef = useRef(false);

    const eventHandler = useCallback((e:any) => {
        if (e.data?.event !== 'calendly.event_scheduled') // ignore everything except scheduled
            return;

        console.log(e.data);

        fetch(`${api.endpoint}/eb-tag`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem(JWT_KEY)}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tag: 'calendly'
            })
        }).then(() => {
            if (onScheduled)
                onScheduled();
        });
    }, [onScheduled]);

    useEffect(() => {
        window.addEventListener('message', eventHandler);

        return () => window.removeEventListener('message', eventHandler);
    }, [eventHandler])

    useEffect(() => {
        if (scriptLoaded)
            return

        const script = document.createElement('SCRIPT');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        script.addEventListener('load', () => setScriptLoaded(true));
        document.head.append(script);
    }, [scriptLoaded, setScriptLoaded]);

    const calendlyInit = (ref:any) => {
        if (initializedRef.current)
            return;

        initializedRef.current = true;

        const email = 'john@johndoe.com';
        const phone = '(602) 555-1212';

        w.Calendly.initInlineWidget({
            url,
            parentElement: ref,
            prefill: {
                firstName: 'John',
                lastName: 'Doe',
                email,
                location: (phone ? `1${phone}` : '').replace(/\D+/g, '')
            },
            utm: {}
        });
    }

    if (!scriptLoaded)
        return <Spinner/>
    else
        return <Wrapper id="calendly-inline-widget" ref={calendlyInit}/>;
};

export default Calendly;