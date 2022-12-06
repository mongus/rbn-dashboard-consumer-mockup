import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {AiFillCheckCircle as Check} from "react-icons/ai";
import Photo from "../../../../components/Photo";

const GREY = '#999';

export const Step = styled.span`
    position: absolute;
    
    top: .5rem;
    left: .5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
`;

export const Checkmark = styled.div.attrs({
    children: <Check/>
})`
    flex-grow: 1;
    color: ${({theme:{green}}) => green};
    display: flex;
    align-items: flex-end;
    align-self: flex-end;
    margin: 0 -1rem -1rem 0;
`;

interface BoxProps {
    disabled?: boolean
}

const Box = styled.div<BoxProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    padding: 2rem;
    background: #fff;
    text-align: center;
    color: ${({disabled, theme:{accent}}) => disabled ? GREY : accent};
    position: relative;
    cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
    transform: scale(1);
    transition: all .25s;
    text-decoration: none;
    pointer-events: ${({disabled}) => disabled ? 'none' : 'all'};
    
    &:hover {
        transform: scale(1.05);
    }
    
    svg {
        font-size: 64px;
    }
    
    ${Photo} {
        width: 64px;
        height: 64px;
        border-radius: 32px;
    }
    
    h2 {
        margin-top: 0;
        font-weight: bold;
    }
    
    p {
        margin-top: 0;
        color: ${({disabled}) => disabled ? GREY : '#333'};
    }
    
    p:last-child {
        margin-bottom: 0;
    }
    
    &::after {
        content: '';
        background: ${({disabled, theme:{accent}}) => disabled ? GREY : accent};
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 4px;
    }
    
    ${Step} {
        background-color: ${({disabled, theme:{accent}}) => disabled ? GREY : accent};
    }
`;

export const LinkBox = (props:any) => <Box as={Link} {...props}/>;

export interface Props {
    step?: number,
    disabled?: boolean
}

export default Box;