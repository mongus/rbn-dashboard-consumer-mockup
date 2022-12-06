import React, {useCallback, useState} from 'react';
import AuthenticatedPage from "../../../../../components/AuthenticatedPage";
import AutoCompleteGooglePlaces from "../../../../../components/form/AutoCompleteGooglePlaces";
import styled from "styled-components";
import {Button, Buttons, LinkButton} from "../../../../../components/form";
import useRedirect from "../../../../../lib/use-redirect";

const Wrapper = styled.div`
    border: 1px solid #ccc;
    padding: 2rem;
    background: #fff;
    
    h2 {
        margin-top: 0;
        font-weight: bold;
        color: ${({theme:{accent}}) => accent};
    }
    
    p:first-child {
        margin-top: 0;
    }
    
    p + label {
        margin-top: 2rem;
    }
`;

const Grid = styled.div`
    display: grid;
    
    @media (min-width: 481px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2rem;
    }
`;

const Profile = () => {
    const inquiry = undefined;

    const address = '';

    const [sellAddress, setSellAddress] = useState(address);

    const redirect = useRedirect();

    const createAddressHandler = () => {
        return (data:any) => {
            setSellAddress(data?.label);
        }
    };

    const dirty = address !== sellAddress;

    const onSave = useCallback(() => {
        if (!inquiry)
            return;

        const {nodeId, details} = inquiry;

        if (!(nodeId && details))
            return;

        redirect('/dashboard');
    }, [inquiry, redirect]);

    const option = address ? {
        id: address,
        label: address,
        info: null
    } : undefined;

    return (
        <AuthenticatedPage>
            <Wrapper>
                <h2>Home to Sell</h2>
                <Grid>
                    <div>
                        <p>
                            Please provide us with the address of the home you'd like to sell.
                        </p><p>
                            As a quick reminder, you must work with an RBN participating agent to earn American Express Membership Rewards points with your home sale or purchase.
                        </p>
                    </div>
                    <div>
                        <AutoCompleteGooglePlaces
                            onSelect={createAddressHandler()}
                            label="Home Address"
                            defaultValue={option}
                        />
                        <Buttons>
                            <LinkButton variation="transparent" to="/dashboard">Cancel</LinkButton>
                            <Button onClick={onSave} disabled={!dirty}>Save</Button>
                        </Buttons>
                    </div>
                </Grid>
            </Wrapper>
        </AuthenticatedPage>
    )
};

export default Profile;