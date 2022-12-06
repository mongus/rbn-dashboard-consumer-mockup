import styled from 'styled-components';

import Button from './Button';
import {LinkButton} from "./index";

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem 0;
    
    & > ${Button}, & > ${LinkButton} {
      margin-right: 1em;
    }
    
    & > ${Button}:last-child, & > ${LinkButton}:last-child {
      margin-right: 0;
    }
    
    @media (max-width: 480px) {
      & > ${Button}, & > ${LinkButton} {
        flex-grow: 1;
      }
    }
`;

export default Buttons;