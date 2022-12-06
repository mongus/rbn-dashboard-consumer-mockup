import React from 'react';
import {BsHouseFill as Icon} from "react-icons/all";

import Box from "./Box";

const Rewards = () => {
    const {title, content} = true ? {
        title: 'Rewards Calculator',
        content: 'Estimate your rewards.'
    } : {
        title: 'Home Details',
        content: 'Enter/View the details of your home purchase.'
    }

    return (
        <Box>
            <Icon/>
            <h2>{title}</h2>
            <p>{content}</p>
        </Box>
    );
}

export default Rewards;