import React from 'react';
import Page from "../../../../../components/AuthenticatedPage";
import styled from "styled-components";

const Content = styled.div`
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

    & > :nth-child(2) {
        box-shadow: 1px 1px 5px rgba(0,0,0,.15);
    }
    
    @media (min-width: 481px) {
        padding: 1rem;
    }
`;

const Message = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 3rem 2rem 5rem;

    h1 {
        margin: 30px 0 2rem;
        font-size: 26px;
        
        sup {
            font-size: 18px;
        }
    }
    
    @media (max-width:480px) {
        display: none;
    }
`;

const Eligibility = styled.div`
    margin: 2rem 0;
    flex-grow: 1;
    font-size: 22px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
    align-items: center;
    
    & > * {
        align-self: start;
    }
`;

const Pending = styled.span.attrs({
    children: 'Pending (Click the Login button to get started)'
})`
    color: #999;
`;

const Bullets = styled.ol`
    li {
        margin-bottom: 1.25em;
    }
`;

const Note = styled.p`
    font-size: 12px;
    color: #666;
    margin-left: 1rem;
`;

const Terms = styled.div`
    font-size: 12px;
    color: #999;
`;

const AmExConnect = () => {
    let eligibilityMessage = <Pending/>;

    return (
        <Page>
            <Content>
                <Message>
                    <h1>Earning American Express Membership Rewards<sup>&reg;</sup>&nbsp;Points with RBN</h1>
                    <div>Confirm Your Account:</div>
                    <Bullets>
                        <li>Click the <strong>Log in button</strong> to securely open the American Express Login page directly with American Express.</li>
                        <li>Enter your americanexpress.com username and password.</li>
                        <li>American Express will authenticate your Card Member details and confirm eligibility.</li>
                        <li>Review the authentication response from American Express below.</li>
                    </Bullets>
                    <Note>
                        Note:  This authentication occurs directly with American Express. For questions regarding eligibility, please contact American Express directly using the number on the back of your card.
                    </Note>
                    <Eligibility>
                        <span>Eligibility:</span><span>{eligibilityMessage}</span>
                    </Eligibility>
                    <Terms>
                        Terms and Conditions for the Membership Rewards program apply.
                        Visit <a href="https://membershiprewards.com/terms">membershiprewards.com/terms</a> for
                        more information. To learn more, go to <a href="https://www.membershiprewards.com/pointsinfo">www.membershiprewards.com/pointsinfo</a>.
                    </Terms>
                </Message>
                {/*<Login onQualify={onQualify} onError={onError}/>*/}
            </Content>
        </Page>
    )
};

export default AmExConnect;