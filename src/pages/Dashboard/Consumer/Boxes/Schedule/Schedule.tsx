import React from 'react';
import styled from "styled-components";
import {FaIdCardAlt as Icon, FaPhoneAlt as Phone, GoCommentDiscussion as SMS, MdMail as Mail} from "react-icons/all";

import Box from "../Box";

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;    
    padding: 0;
    
    a {
        color: currentcolor;
    }
    
    svg {
        font-size: 36px;
    }
`;

const Schedule = () => {
    return (
        <Box>
            <Icon/>
            <h2>Your RBN Concierge</h2>
            <p>Connect with your RBN Concierge anytime.</p>
            <Links>
                <a href="tel:+18442424726"><Phone size={28}/></a>
                {false && <a href="sms:+18777438726"><SMS/></a>}
                <a href="mailto:support@joinrbn.com"><Mail/></a>
            </Links>
        </Box>
    );
}

export default Schedule;