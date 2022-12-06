import React from 'react';
import {BsHouseFill as Icon} from "react-icons/all";

import {Checkmark, LinkBox, Props, Step} from "../Box";

const Buying = ({step}:Props) => {
    const addresses: string[] = [];

    return (
        <LinkBox to="/dashboard/buying">
            {step && <Step>{step}</Step>}
            <Icon/>
            <h2>Buying</h2>
            <p>Please enter some addresses of houses you're interested in.</p>
            {0 < addresses.length && <Checkmark/>}
        </LinkBox>
    );
}

export default Buying;