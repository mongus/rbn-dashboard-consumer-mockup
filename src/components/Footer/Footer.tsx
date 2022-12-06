import React, {useState} from 'react';
import styled from 'styled-components';

import {NavLink} from "react-router-dom";
import {amex, rbn} from "../../config";
import NavSection from "./NavSection";
import {FaFacebook, FaLinkedin, FaEnvelope} from "react-icons/fa";
import {useLocation} from "react-router";

const ShowMobileDisclaimers = styled.div`
  color: ${({theme:{lightGreen}}) => lightGreen};
  display: none;
`;

const Disclaimer = styled.div`
  margin: .5rem 0;
  text-align: justify;
  font-size: 12px;
  color: #999;
    
    a {
      color: ${({theme:{lightGreen}}) => lightGreen};
      text-decoration: none;
    }
`;

const backgroundColor = '#1c1f23';

const StyledFooter = styled.footer`
    color: #999;
    background-color: ${backgroundColor};
    padding: 10px;

    & > div {
        max-width: ${({theme:{width}}) => width};
        margin: 0 auto;
        font-family: 'Poppins', sans-serif;
    }
    
    p, li, a, td {
      line-height: 1.5;
    }
    
    @media (max-width: 400px) {
      ${Disclaimer}, &.show-mobile-disclaimers ${ShowMobileDisclaimers} {
        display: none;
      }
    
      &.show-mobile-disclaimers ${Disclaimer}, ${ShowMobileDisclaimers} {
        display: block;
      }
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 2rem;
    border-bottom: 1px solid #666;
    margin-bottom: 2rem;
`;

const BottomStrip = styled.div`
    color: #999;
    background-color: ${backgroundColor};
    width: 100%;
    padding: 1rem 0;
`;

const Copyright = styled.div`
    width: ${({theme:{width}}) => width};
    margin: 0 auto;
    font-size: 14px;
    
    a {
      color: inherit;
      text-decoration: none;
    }
  
    @media (max-width: ${({theme:{width}}) => width}) {
      width: 100%;
      padding: 0 1rem;
    }
`;

const copyrightStart = 2017;
const currentYear = new Date().getFullYear();
const years = copyrightStart === currentYear ? copyrightStart : `${copyrightStart} - ${currentYear}`;

const parts = [
    `${years} RBN and its subsidiaries`,
    `All Rights Reserved`,
    <NavLink to='/agreements/privacy-policy'>Privacy Policy</NavLink>,
    <NavLink to='/agreements/terms-and-conditions'>Terms and Conditions</NavLink>
];

const PROPERTIES_TEST = /^\/properties.*/;

interface Props {
    footnotes?: any
}

const Footer:React.FC<Props> = ({footnotes}) => {
    const [showMobileDisclaimers, setShowMobileDisclaimers] = useState(false);

    const {pathname} = useLocation();

    const properties = PROPERTIES_TEST.test(pathname);

    if (footnotes && !(footnotes instanceof Array))
        footnotes = [footnotes];

    return (
        <>
            <StyledFooter id="footer" className={showMobileDisclaimers ? 'show-mobile-disclaimers' : ''}>
                <div>
                    <Nav>
                        <NavSection heading="About RBN">
                            <NavLink to="/about">About Us</NavLink>
                            <NavLink to="/our-story">Our Story</NavLink>
                            <NavLink to="/newsroom">Newsroom</NavLink>
                        </NavSection>

                        <NavSection heading="Quick Links">
                            <NavLink to="/join-now">Join Now</NavLink>
                            <NavLink to="/help-center#buyers">FAQs</NavLink>
                            <NavLink to="/help-center#agents">For Agents</NavLink>
                        </NavSection>

                        <NavSection heading="Stay In Touch">
                            <NavLink to="/help-center#contact-us"><FaEnvelope/>Contact Us</NavLink>
                            <a href="https://facebook.com/joinrbn" target="_blank" rel="noopener noreferrer"><FaFacebook/>Facebook</a>
                            <a href="https://www.linkedin.com/company/joinrbn" target="_blank" rel="noopener noreferrer"><FaLinkedin/>LinkedIn</a>
                        </NavSection>
                    </Nav>
                    <ShowMobileDisclaimers onClick={() => setShowMobileDisclaimers(true)}>View Terms</ShowMobileDisclaimers>
                    {footnotes && footnotes.map((footnote:any) => (
                        <Disclaimer>{footnote}</Disclaimer>
                    ))}
                    <Disclaimer>
                        {rbn.footnote.symbol} {rbn.footnote.text}
                    </Disclaimer>
                    <Disclaimer>
                        {amex.footnote.symbol} {amex.footnote.text}
                    </Disclaimer>
                    {properties && <Disclaimer>
                        The RBN platform serves the participating agents and Brokerages of RBN. Listings displayed are held by brokerage firms other than the owner of this website. The listing brokerage is identified in any listing details. Information is deemed reliable but is not guaranteed. All real estate brokerage components of this program are managed and offered directly by these participating real estate agents and brokerages.  Member Connections are facilitated by RBN Realty, a wholly owned brokerage of RBN LLC.
                    </Disclaimer>}
                    <Disclaimer>
                        This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                    </Disclaimer>
                </div>
            </StyledFooter>
            <BottomStrip>
                <Copyright>
                    &copy; {parts.map((part, i) => (
                    <React.Fragment key={i}>
                        {i > 0 && ' ~ '}
                        {part}
                    </React.Fragment>
                ))}
                </Copyright>
            </BottomStrip>
        </>
    );
};

export default Footer;
