import React from 'react';
import {AiFillCreditCard as Icon} from "react-icons/all";

import {LinkBox, Props, Step, Checkmark} from "../Box";
import styled from "styled-components";

const Congratulations = styled.span`
    color: ${({theme:{green}}) => green};
`

const AmEx = ({step}:Props) => {
    const hasAmex:any = undefined;
    const connected =  false;

    const {title, content, link} = (true || hasAmex) ? {
        title: `AmEx Connect${connected ? 'ed' : ''}`,
        content: connected ? 'Your eligible American Express program account has been connected.' : 'Confirm your eligible American Express program account.',
        link: connected ? '/dashboard' : '/dashboard/amex-connect'
    } : {
        title: 'Card Offers',
        content: 'View American Express eligible card offers.',
        link: '/dashboard/amex-connect'
    }

    return (
        <LinkBox to={link}>
            {step && <Step>{step}</Step>}
            <Icon/>
            <h2>{title}</h2>
            <p>{connected && <Congratulations>Congratulations!</Congratulations>} {content}</p>
            {connected && <Checkmark/>}
        </LinkBox>
    );
}

export default AmEx;