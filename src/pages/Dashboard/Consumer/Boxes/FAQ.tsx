import React from 'react';
import {BsQuestionSquareFill as Icon} from "react-icons/all";

import {LinkBox} from "./Box";

const FAQ = () => {
    return (
        <LinkBox to="/help-center">
            <Icon/>
            <h2>FAQs</h2>
            <p>Visit the FAQs to learn more.</p>
        </LinkBox>
    );
}

export default FAQ;