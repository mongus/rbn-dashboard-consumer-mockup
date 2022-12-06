import React from 'react';
import styled, { css } from 'styled-components';

import {propFn} from "../../lib/theme";

const property = propFn('button');

// TODO: had to add !important because of bootstrap :-P

export interface ButtonProps {
    disabled?: boolean,
    variation?: string
}

export const ButtonStyle = css<ButtonProps>`
  display: inline-block;
    text-decoration: none !important;
    white-space: nowrap;
    line-height: 30px;
    margin: 0;
    padding: 10px 20px;
    width: auto;
    min-width: 160px;
    text-align: center;
    cursor: ${({disabled}) => disabled ? 'default' : 'pointer' };
    text-transform: uppercase;
    outline: none;

    font-family: Arial;
    font-size: ${property('font-size', '16px')};
    color: ${({disabled,theme:{accent}}) => disabled ? accent : property('color')} !important;
    background-color: ${({disabled}) => disabled ? '#ccc' : property('background')};
    border: ${property('border', 'none')};
    
    transition: .1s all;
    
    border-radius: 1rem;
    
    @media (max-width: 400px) {
      min-width: 100px;
    }
`;

const Button = styled(({children, ...props}) => (
    <button {...props}>{children}</button>
)).attrs(({className}) => ({
    className: `${className} button`
}))`
    ${ButtonStyle}
`;

export default Button;