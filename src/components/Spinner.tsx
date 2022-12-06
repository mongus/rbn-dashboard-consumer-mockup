import React from 'react';
import styled, {keyframes} from 'styled-components';
import {FaCircleNotch as Icon} from 'react-icons/fa';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const fadein = keyframes`
  from {
    color: rgba(0,0,0,0);
  }
  
  to {
    color: rgba(0,0,0,.5);
  }
`;

const StyledSpinner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    animation: ${fadein} 2s forwards;

    svg {
        animation: ${rotate} 1s linear infinite;
    }
`;

interface Props {
    className?: string;
}

const Spinner = ({className}:Props) => (
    <StyledSpinner className={className}>
        <Icon size={32}/>
    </StyledSpinner>
);

export default Spinner;