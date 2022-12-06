import React from 'react';

import Box, {Props, Step} from "./Box";
import styled from "styled-components";

const StyledBox = styled(Box)`
    background: ${({theme:{accent}}) => accent};
    color: #fff;
    text-align: left;
    padding-left: 3rem;
    
    p {
        color: inherit;
    }
    
    ${Step} {
        color: ${({theme:{accent}}) => accent};
        background-color: #fff;
    }
    
    @media (min-width: 481px) {
        x-grid-column: span 2;
    }
`;

interface InstructionsProps extends Props {
    children?: any
}

const Instructions = ({step, children}:InstructionsProps) => {
    children = children || (
        <>
            <p>replace me</p>
        </>
    );

    return (
        <StyledBox>
            {step && <Step>{step}</Step>}
            {children}
        </StyledBox>
    )
};

export default Instructions;