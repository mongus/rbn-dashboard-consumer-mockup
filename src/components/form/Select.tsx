import React from "react";

import {StyledInput} from './Input';
import Label from './Label';
import Required from './Required';
import styled from "styled-components";

interface ComponentProps {
    label?: string,
    grow?: boolean,
    items?: {[value: string]: string;}|Array<string>,
    labelStyle?: any,
    [key:string]: any
}

const StyledSelect = styled(StyledInput).attrs({
    as: 'select'
})`
`;

const Select = ({label, grow=false, items, labelStyle, children, ...props}: ComponentProps) => {
    const options = items instanceof Array ?
            items.map(value => <option key={value} value={value}>{value}</option>) :
            items && Object.keys(items).map(value => <option key={value} value={value}>{items[value]}</option>
    );

    return (
        <Label grow={grow} style={labelStyle}>
            {label}{label && props.required && <Required/>}
            <StyledSelect {...props}>
                {children}
                {options}
            </StyledSelect>
        </Label>
    );
};

export default Select;