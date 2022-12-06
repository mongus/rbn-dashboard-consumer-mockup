import React from 'react';
import styled from 'styled-components';

import placeholder from '../images/image-placeholder.png';

const Photo = styled(({...props}) => {
    return (
        <div {...props}/>
    );
})`
  position: relative;
  background-image: url(${({src}) => src || placeholder});
  background-position: center top;
  background-size: cover;
  background-color: #eee;
  padding-top: ${({height}) => typeof height !== 'undefined' ? height : '85%'};
  filter: grayscale(${({bw}) => bw ? 1 : 0});
  border-radius: 1rem;
    
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
  }
  
  svg {
    position: absolute;
    top: .5rem;
    right: .5rem;
    font-size: 16px;
    color: #666;
  }
`;

export default Photo;