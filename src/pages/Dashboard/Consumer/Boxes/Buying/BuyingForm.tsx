import React, {useCallback, useState} from 'react';
import AuthenticatedPage from "../../../../../components/AuthenticatedPage";
import AutoCompleteGooglePlaces from "../../../../../components/form/AutoCompleteGooglePlaces";
import styled from "styled-components";
import {Buttons, Button, LinkButton} from "../../../../../components/form";
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

    const addresses: string[] = [];

    const [favorites, setFavorites] = useState<Array<string>>(addresses);

    const redirect = useRedirect();

    const createAddressHandler = (i:number) => {
        return (data:any) => {
            const newFavorites = favorites.slice();

            if (i < newFavorites.length)
                newFavorites[i] = data?.label || '';
            else
                newFavorites.push(data?.label || '');

            setFavorites(newFavorites);
        }
    };

    const dirty = (addresses.length !== favorites.length) ||
        favorites.reduce((dirty:boolean, address, i) => dirty || address !== addresses[i], false);

    const onSave = useCallback(() => {
        if (!inquiry)
            return;

        const {nodeId, details} = inquiry;

        if (!(nodeId && details))
            return;

        redirect('/dashboard');
    }, [inquiry, redirect]);

    return (
        <AuthenticatedPage>
            <Wrapper>
                <h2>Favorite Homes</h2>
                <Grid>
                    <div>
                        <p>
                            Your next step is to send us the homes you're saving to your favorites from Zillow (or your favorite search portal).  The more I know about the homes and neighborhoods you are interested in, the more easily I can connect you with the right RBN participating agent. (If, for any reason, you're unable to find homes in the market or price range you're interested in, please let me know that as well).
                        </p><p>
                            When you're on Zillow, you just click the "Share" button on the top page.  Use homes@joinrbn.com in the Recipient's email field, enter your info and click the "send email" button (see the image below).  If you're having trouble sharing, you can always just send me the links directly (email or text) or whatever is easiest for you.
                        </p><p>
                            As a quick reminder, you must work with an RBN participating agent to earn American Express Membership Rewards points with your home sale or purchase, so the sooner, the better.
                        </p>
                    </div>
                    <div>
                        {[0, 1, 2].map((i) => {
                            const address = (favorites && i < favorites.length && favorites[i]) || '';

                            const option = address ? {
                                id: address,
                                label: address,
                                info: null
                            } : undefined;

                            return (
                                <AutoCompleteGooglePlaces
                                    key={i}
                                    onSelect={createAddressHandler(i)}
                                    label={`Home ${i+1} Address`}
                                    defaultValue={option}
                                />
                            );
                        })}
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