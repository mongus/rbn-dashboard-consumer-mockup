import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
    padding-bottom: 8px;
    margin-bottom: 16px;
    white-space: nowrap;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    max-width: 340px;
    margin-top: 50px;
    margin-right: 10px;
    
    &:last-child {
        margin-right: 0;
    }

    p {
        margin: 0 0 1.5em;
    }
    
    a {
        color: inherit;
        margin: 0 0 10px;
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: underline;
    }
    
    svg {
        margin-right: .5rem;
        position: relative;
        top: 2px;
    }
`;

interface Props {
    heading: React.ComponentType | string,
    children: JSX.Element[] | JSX.Element
}

const NavSection = ({heading, children}: Props) => (
    <Section>
        <Heading>{heading}</Heading>
        {children}
    </Section>
);

export default NavSection;