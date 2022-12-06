import styled from "styled-components";
import React from "react";

interface Props {
    className?: string,
    name?: string,
    label: string
}

const Checkbox = styled(({label, name, ...props}:Props) => {
    return (
        <label {...props}><input type="checkbox" name={name} value={label}/> {label}</label>
    )
})`
  grid-column: span 2;
  padding-left: 1.75rem;
  padding-bottom: .5rem;
  position: relative;
  cursor: pointer;
  
  input {
    position: absolute;
    left: 0;
  }
`;

export default Checkbox;