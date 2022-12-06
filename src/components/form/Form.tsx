import React from 'react';
import styled from 'styled-components';

import Box from './Box';
import Buttons from "./Buttons";

interface Props {
    box?: boolean,
    steps?: any,
    [key:string]: any
}

const Form = styled(({children, box, steps, ...props}: Props) => (
    <form {...props}>
        {box ? (
            <Box>
                {children}
            </Box>
        ) : children}
    </form>
))`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    
    ${Buttons} {
      margin-bottom: 0;
    }
`;

export default Form;