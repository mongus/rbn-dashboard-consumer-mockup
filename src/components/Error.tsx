import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
    margin: 1em 0;
    color: #c00;
    font-weight: bold;
`;

interface Props {
    className?: string,
    error?: string | undefined,
    children?: string | undefined
}

export default styled(({className, ...props}: Props) => ((props.error || props.children) && <Error className={className}>{translate(props.error || props.children)}</Error>) || null)`

`;

function translate(error:any) {
    if (typeof error === 'string')
        return error;

    if (error.message)
        return error.message;    
}