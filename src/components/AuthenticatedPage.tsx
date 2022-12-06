import React from 'react';
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import Overlay from './Overlay';

import theme from '../styles';

interface HeadingProps {
    image: string,
    text: string,
    className?: string
}

export interface Props {
    title?: string,
    headerBackground?: string,
    fullWidth?: boolean,
    backgroundColor?: string|undefined,
    backgroundImage?: string|undefined,
    heading?: HeadingProps,
    overlay?: boolean,
    overlayHeading?: any,
    footnotes?: any,
    [key:string]: any
}

const Heading = styled(({image, text, className}:HeadingProps) => (
    <div className={className}>
        {text}
    </div>
))`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({image}) => `url(${image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  
  color: #fff;
  font-size: 36px;
`;

const OverlayHeading = styled.div`
  z-index: 32767;
  color: #fff;
  text-align: center;
  padding-bottom: 2rem;
  
  div:first-child {
    font-size: 48px;
    
    @media (max-width: 400px) {
      font-size: 32px;
    }
  }

  div + div:last-child {
    font-size: 12px;
    color: ${({theme:{lightGreen}}) => lightGreen};
  }  
`;

const Content = styled(({className, overlay, overlayHeading, children}) => {
    if (typeof overlayHeading === 'string')
        overlayHeading = <div>{overlayHeading}</div>;

    return (
        <section className={className}>
            {overlay && <Overlay/>}
            <article>
                {overlayHeading && <OverlayHeading>{overlayHeading}</OverlayHeading>}
                {children}
            </article>
        </section>
    )
})`
    display: flex;
    flex-direction: column;
    align-items: ${({fullWidth=false}) => fullWidth ? 'flex-start' : 'center'};
    flex-grow: 1;
    background: ${({background}) => background};
    background-image: ${({backgroundImage}) => `url(${backgroundImage||''})`};
    background-position: top center;
    background-size: cover;

    & > article {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: ${({overlay=false}) => overlay ? 'center' : 'normal'};
        ${({overlay=false}) => overlay ? `position: relative; z-index: 32767` : ''}
        width: ${({fullWidth=false, theme:{width}}) => fullWidth ? '100%' : width};
        margin: ${({backgroundImage, fullWidth=false, overlay=false}) => `${backgroundImage ? '106px' : 0} ${overlay ? 0 : 'auto'} ${fullWidth && !overlay ? 0 : '40px'}`};
        padding: ${({fullWidth=false, overlay=false}) => fullWidth || overlay ? 0 : '1rem 0'};
        
        @media(max-width: ${({theme:{width}}) => width}) {
          width: 100%;
        }
    }
    
    & > article > :first-child {
        margin-top: 0;
    }
`;

const Page = styled(({className, title, heading, footnotes, ...props}:Props) => {
    const {headerBackground=theme.accent} = props;

    return (
        <main className={className}>
            <Header title={title} background={headerBackground}/>
            {heading && <Heading {...heading}/>}
            <Content {...props}/>
            <Footer footnotes={footnotes}/>
        </main>
    );
})`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    
    background-color: ${({theme:{page:{background}}, backgroundColor}) => backgroundColor || background};

`;

export default Page