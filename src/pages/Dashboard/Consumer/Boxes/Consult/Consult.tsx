import React, {useCallback} from 'react';
import {SiGooglecalendar as Icon} from "react-icons/all";

import {Props, Step, LinkBox, Checkmark} from "../Box";

const Consult = ({step, disabled}:Props) => {
    const clickHandler = useCallback((e:any) => {
        if (disabled)
            e.preventDefault();
    }, [disabled]);

    const scheduled = false;

    return (
        <LinkBox to="/dashboard/schedule" disabled={disabled || scheduled} onClick={clickHandler}>
            {step && <Step>{step}</Step>}
            <Icon size={60}/>
            <h2>Schedule a Consult</h2>
            <p>Connect with an RBN Concierge to get started.</p>
            {scheduled && <Checkmark/>}
        </LinkBox>
    );
}

export default Consult;