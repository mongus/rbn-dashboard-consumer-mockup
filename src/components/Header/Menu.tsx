import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FaBars, FaUser as UserIcon} from 'react-icons/fa';

const Toggle = styled.div`
  text-align: right;
  font-size: 10vw;
  opacity: .85;
  padding: 0;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    font-size: 12pt;
    white-space: nowrap;
    
    a {
      text-decoration: none;
      color: inherit;
    }
    
    & > * {
      padding: .5rem 1rem;
    }
    
    & > .active, & > *:hover {
      color: ${({theme:{green}}) => green};
    }
    
    ${Toggle} {
      display: none;
    }
  
  @media (max-width: 800px) {
    flex-wrap: wrap;

    & > * {
      padding: .25rem 1rem;
    }
  }
    
    @media (max-width: 480px) {
        font-size: 7vw;
        position: absolute;
        right: 0;
        top: 0;
        flex-direction: column;
      
        ${Toggle} {
          display: block;
          border: none;
          background: transparent;
          color: #fff;
          padding: 0;
        }
        
        & > * {
          display: none;
          background: ${({theme:{accent}}) => accent};
          border: 1px solid rgba(255,255,255,.25);
          border-bottom: none;
        }
        
        & > *:last-child {
          border-bottom: 1px solid rgba(255,255,255,.25);
        }
        
        &.show > * {
          display: block;
        }
    }

`;

const StyledSubMenu = styled.div`
  cursor: pointer;
  position: relative;
  
  & > div {
    display: none;
    flex-direction: column;
  }
  
  &:hover > div {
    display: flex;
  }
  
  @media (min-width: 481px) {
    & > div {
        position: absolute;
        top: 100%;
        margin-top: -.25rem;
        right: 0;
        background: rgba(255,255,255,0.85);
        color: ${({theme:{accent}}) => accent};
        box-shadow: 1px 1px 5px rgba(0,0,0,.5);
      border-radius: 8px;
      overflow: hidden;
    }
    
      & > div > * {
        padding: .5rem 1rem;
      }
      
      & > div > *:hover {
        color: #fff;
        background: ${({theme:{accent}}) => accent};
      }
  }
  
  @media (max-width: 480px) {
    padding: 0;
    
    & > span:first-child {
      display: none;
    }
    
    & > div {
      display: flex;
    }
    
    & > div > * {
      padding: .5rem 1rem;
      border-bottom: 1px solid rgba(255,255,255,.25);
    }
    
    & > div > *:last-child {
      border-bottom: none;
    }
    
    & > div > .active {
      color: ${({theme:{green}}) => green};
    }

  }
`;

interface SubMenuProps {
    title: any,
    children: any
}

const SubMenu = ({title, children}:SubMenuProps) => {
    return (
        <StyledSubMenu>
            <span>{title}</span>
            <div>
                {children}
            </div>
        </StyledSubMenu>
    )
}

// const DownArrow = styled.span`
//   display: inline-block;
//   width: 0;
//   height: 0;
//   border-left: 5px solid transparent;
//   border-right: 5px solid transparent;
//   border-top: 5px solid currentColor;
//   margin-left: .25em;
//   padding-bottom: 3px;
// `;

const LoginLink = styled(NavLink).attrs({
    to: '/login',
    children: 'Login'
})`
`;

// const PhoneNumber = styled.a.attrs({
//     href: 'tel:8777438726',
//     children: '(877) 743-8726'
// })`
//     font-weight: bold;
//   font-size: 125%;
// `;

const Menu = () => {
    const viewer = { firstName: 'John' };
    const [show, setShow] = useState(false);

    return (
        <Nav className={show ? 'show' : ''}>
            <Toggle>
                <FaBars onClick={() => setShow(!show)}/>
            </Toggle>
            {/* <NavLink to="/properties">Featured Properties</NavLink> */}
            <NavLink to="/" exact={true}>Home</NavLink>
            {/* <NavLink to="/how-it-works">How It Works</NavLink> */}
            <NavLink to="/apply-now">For Agents</NavLink>
            {/* <NavLink to="/help-center">FAQs</NavLink> */}
            {/* <SubMenu title={<>More <DownArrow/></>}>
                <NavLink to="/about">About Us</NavLink>
                {false && <NavLink to="/our-story">Our Story</NavLink>}
                <NavLink to="/help-center#contact-us">Contact Us</NavLink>
                {!viewer && <LoginLink/>}
            </SubMenu> */}
            {/* !viewer && <NavLink to="/jump">Find an Agent</NavLink> */}
            {viewer ? (
                <SubMenu title={<UserIcon/>}>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/dashboard/change-password">Change Password</NavLink>
                    <NavLink to="/logout">Log Out {viewer && viewer.firstName}</NavLink>
                </SubMenu>
            ) : (
                <LoginLink/>
            )}
            {/* <PhoneNumber/> */}
        </Nav>
    );
};

export default Menu;
