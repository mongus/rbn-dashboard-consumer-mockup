import React from "react";
import styled from "styled-components";

const Box = styled.div`
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    background-color: ${({theme:{accent}}) => accent};
    color: #fff;
    display: grid;
    grid-template-columns: auto 1fr;
`;

const Arrow = styled(({className}:{className?:string}) => {
    return (
        <svg className={className} preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 100,50 0,100 100,100 100,0" />
        </svg>
    );
})`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100px;
  fill: ${({theme:{accent}}) => accent};
`;

interface LeftProps {
    optional?: boolean,
    background?: string,
    arrow?: boolean,
    className?: string,
    children: any
}

export const Left = styled(({arrow, className, children}:LeftProps) => {
    return (
        <div className={className}>
            {arrow && <Arrow/>}
            {children}
        </div>
    )
})`
  background: ${({background}) => background};
  background-size: cover;
  position: relative;
  padding: 2em;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 480px) {
    display: ${({optional}) => optional ? 'none' : 'flex'};
  }
`;

interface RightProps {
    heading?: string,
    className?: string,
    children: any
}

const Heading = styled.div`
  font-size: 28px;
  margin-bottom: 1rem;
`;

export const Right = styled(({heading, className, children}:RightProps) => {
    return (
        <div className={className}>
            {heading && <Heading>{heading}</Heading>}
            {children}
        </div>
    )
})`
  padding: 2rem;
`;

export const Full = styled(({heading, className, children}:RightProps) => {
    return (
        <div className={className}>
            {heading && <Heading>{heading}</Heading>}
            {children}
        </div>
    )
})`
  padding: 2rem;
  grid-column: 1/3;
`;

export default Box;