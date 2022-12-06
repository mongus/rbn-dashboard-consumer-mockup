import React from 'react';
import AuthenticatedPage from "../../../../../components/AuthenticatedPage";
import Calendly from "../../../../../components/Calendly";
import {Buttons, LinkButton} from "../../../../../components/form";
import sessionStorage from "../../../../../lib/session-storage";
import {api, JWT_KEY} from "../../../../../config";

//const CALENDLY_LINK = 'https://calendly.com/joinrbn/30min';
const CALENDLY_LINK = 'https://calendly.com/d/d56-4wv-5xf/rbn-consultation';

const CalendlyPage:React.FC = () => {
    const checkCalendly = () => {
        sessionStorage.setItem('scheduling-consult', 'true');

        fetch(`${api.endpoint}/calendly-scheduled`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem(JWT_KEY)}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(() => {
                // refetch().then();
            })
            .catch(e => console.error(e));
    }

    return (
        <AuthenticatedPage>
            <Calendly url={CALENDLY_LINK} onScheduled={checkCalendly}/>
            <Buttons>
                <LinkButton to="/dashboard">Back to Dashboard</LinkButton>
            </Buttons>
        </AuthenticatedPage>
    )
};

export default CalendlyPage;