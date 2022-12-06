import React from 'react';
import {GiReceiveMoney as Icon} from "react-icons/all";

import Box from "./Box";

const Mortgage = () => {
    const {title, content} = true ? {
        title: 'Mortgage Offers',
        content: 'Earn extra reward points with a mortgage offer from Bankrate.'
    } : {
        title: 'Lender Details',
        content: 'View contact details of your connected lender.'
    }

    return (
        <Box>
            <Icon/>
            <h2>{title}</h2>
            <p>{content}</p>
        </Box>
    )
};

export default Mortgage;