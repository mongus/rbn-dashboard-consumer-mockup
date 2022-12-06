import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import LogoSVG from '../Logo';
import Menu from "./Menu";


const Main = styled.div`
  position: relative;
`;

export const Logo = styled(Link).attrs({
    children:<LogoSVG/>
})`
  color: #fff;
  text-decoration: none;
  text-align: right;
  
  svg {
    display: block;
    height: 64px;
    width: auto;
  }
`;


const Header = styled(({className,title='RBN'}) => (
    <header className={className}>
        <title>{title}</title>
        <Main>
            <Logo to="/"/>
            <Menu/>
        </Main>
    </header>
))`
    color: #fff;
    background: ${({background}) => background};
    position: ${({background}) => background === 'transparent' || /rgba\(/.test(background) ? 'absolute' : 'relative'};
    z-index: 65535;
    padding: 1rem;
    
    @media (min-width: ${({theme:{width}}) => width}) {
      padding: 1rem 4rem;
    }
  
    @media (max-width: 800px) {
      padding: .5rem;
    }
    
    & > div {
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
`;

export default Header;