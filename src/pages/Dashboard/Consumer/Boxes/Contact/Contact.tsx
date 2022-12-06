import React from 'react';
import {FaPhoneSquareAlt as Icon} from "react-icons/all";

import {LinkBox} from "../Box";

const Contact = () => {
    return (
        <LinkBox to="/help-center#contact-us">
            <Icon/>
            <h2>Contact RBN Support</h2>
            <p>We're here to help. Call, email or text anytime.</p>
        </LinkBox>
    );
}

export default Contact;