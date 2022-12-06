import React from 'react';
import {BsHouseFill as Icon} from "react-icons/all";

import {Checkmark, LinkBox, Props, Step} from "../Box";

const Selling = ({step}:Props) => {
    const address = '';

    return (
        <LinkBox to="/dashboard/selling">
            {step && <Step>{step}</Step>}
            <Icon/>
            <h2>Selling</h2>
            <p>Please provide us with the address of the home you'd like to sell.</p>
            {address && <Checkmark/>}
        </LinkBox>
    );
}

export default Selling;