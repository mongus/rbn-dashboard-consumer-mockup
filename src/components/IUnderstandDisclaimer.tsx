import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Disclaimer = styled.div`
  margin-top: .5rem;
  font-size: 60%;
  opacity: .90;
  
  span {
    border-bottom: currentColor dotted 1px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

interface Props {
    className?: string
}

const IUnderstandDisclaimer = ({className}:Props) => (
    <Disclaimer className={className}>
        I understand RBN Membership <a href="#footer">eligibility</a> and agree to RBN's <Link to="/agreements/terms-and-conditions">Terms</Link>
    </Disclaimer>
);

export default IUnderstandDisclaimer;