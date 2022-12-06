// import React from 'react';
import styled from "styled-components";

const Boxes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export default Boxes;