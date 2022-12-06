import React from 'react';
import {NavLink} from "react-router-dom";
import {branding} from './branding';

const TERMS_PATH = '/agreements/terms-of-use';
const FOOTNOTE = (
    <>
        Offer only valid for select U.S. American Express Card Members with a Card enrolled in the Membership Rewards® program (‘Eligible Card Members’). Card Members who have only a Corporate Card enrolled in the Membership Rewards program or whose Corporate Card is enrolled in the Corporate Membership Rewards program do not have an Eligible Card Account. Eligible Card Members will receive one Membership Rewards point for every $1 spend to purchase a home using the Real Buyer Network (RBN) and a participating RBN real estate agent when they link their Membership Rewards® account directly with <NavLink to="/">Real Buyer Network</NavLink> on or prior to July 12, 2024.  Points will be awarded within 8 to 12 weeks after receipt by American Express of the eligible home purchase closing confirmation. Visit <NavLink to={TERMS_PATH}>Terms and Conditions</NavLink> for general and applicable Real Buyer Network information. The eligible Card account must be not canceled and not past due at the time of point fulfillment. Offer is non-transferable. Terms and Conditions for the Membership Rewards® program apply. Visit <a href="https://www.membershiprewards.com/terms">Membership Rewards Program Terms</a> for more information. Participating partners and available rewards are subject to change without notice. The value of Membership Rewards points varies according to how you choose to use them.  To learn more, go to <a href="https://www.membershiprewards.com/pointsinfo">Membership Rewards</a>.
    </>
);

export const amex = {
    widget: {
        partner_id: ''
    },
    footnote: {
        symbol: '+',
        text: FOOTNOTE
    }
};

let flexibleRewardsUrl;
let integrity;

switch (process.env.REACT_APP_STAGE) {
    case 'local':
    case 'dev':
        flexibleRewardsUrl = 'https://flexpartnerlogin-qa.americanexpress.com/js/1.0/FREE2.min.js';
        integrity = 'sha384-Yd1umnJVVLlePJiEFtjh2tMqZNyyTp9SQWg0wT+C8inGLe6zMPlT5uSSzTw0YK6K';
        amex.widget.partner_id = 'M000000001';
        break;
    case 'qa':
        flexibleRewardsUrl = 'https://flexpartnerlogin-qa.americanexpress.com/js/1.0/FREE2.min.js';
        integrity = 'sha384-Yd1umnJVVLlePJiEFtjh2tMqZNyyTp9SQWg0wT+C8inGLe6zMPlT5uSSzTw0YK6K';
        amex.widget.partner_id = 'M000000009';
        break;
    case 'production':
        flexibleRewardsUrl = 'https://flexpartnerlogin.americanexpress.com/js/1.0/FRE.min.js';
        integrity = 'sha384-6HntQTwR+IfJEX4gktN5g2zZXVmLvBjZNNlGUvjJHblYeQrAPX+WEzSaJVIun04+';
        amex.widget.partner_id = 'M498e91287';
        break;
    default:
}

if (typeof document !== 'undefined' && flexibleRewardsUrl) {
    const s = document.createElement('SCRIPT');
    s.setAttribute('src', flexibleRewardsUrl);
    s.setAttribute('crossorigin', 'anonymous');
    if (integrity)
        s.setAttribute('integrity', integrity);
    document.head.appendChild(s);
}

branding.amex = {
    points: 'Membership Rewards® program account'
};
