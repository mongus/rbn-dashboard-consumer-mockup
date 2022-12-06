import React from 'react';
import {FaHandshake as Icon} from "react-icons/all";

import Box from "./Box";

const Agent = () => {
    const agent = undefined;

    const {title, content} = true || agent ? {
        title: 'Your RBN Participating Agent',
        content: 'View contact details of your connected agent.'
    } : {
        title: 'Invite an Agent',
        content: 'Invite an agent to participate on your home purchase.'
    }

    return (
        <Box>
            <Icon/>
            <h2>{title}</h2>
            <p>{content}</p>
        </Box>
    );
};

export default Agent;