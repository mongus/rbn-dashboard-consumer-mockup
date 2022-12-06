import React from 'react';

import {StyledInput} from "./Input";
import styled from "styled-components";
import Label from "./Label";
import Required from "./Required";

interface ComponentProps {
    label?: string,
    grow?: boolean,
    value?: string,
    required?: boolean,
    className?: string,
    [key:string]: any
}

const StyledTextArea = styled(StyledInput).attrs({
    as: 'textarea'
})`
  padding: 1em 10px;
  font-family: inherit;
  font-size: inherit;
  min-height: 8em;
`;

const TextArea = ({label, grow=false, value, className, labelStyle, ...props}: ComponentProps) => (
    <Label grow={grow} className={className} style={labelStyle}>
        {label}{label && props.required && <Required/>}
        <StyledTextArea {...props} value={value}/>
    </Label>
);

export default TextArea;
