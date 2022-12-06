import React, {useState} from 'react';

import Box, {Props, Step} from "./Box";
import styled from "styled-components";
import {FaPlay as Icon, FaTimes as Close} from "react-icons/fa";

interface InstructionsProps extends Props {
    children?: any
}

const Video = styled.video.attrs({
    src: 'https://joinrbn.com/files/RBN-ConsumerVideo-2022-07-23.mp4'
})`
    width: 100%;
    height: auto;
`;

const Overlay = styled.div`
    position: fixed;
    background-color: #000000CC;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 65535;
`

const VideoContainer = styled.div`
    position: relative;
    max-width: 80%;
    
    svg {
        position: absolute;
        color: #666;
        top: 0px;
        right: 0px;
        cursor: pointer;
    }
`

const VideoBox = ({step}:InstructionsProps) => {
    const [playVideo, setPlayVideo] = useState(false);

    const overlayClicked = (e:any) => {
        if (e.target !== e.currentTarget)
            return;

        setPlayVideo(false);
    }

    return (
        <>
            <Box onClick={() => setPlayVideo(true)}>
                {step && <Step>{step}</Step>}
                <Icon size={60}/>
                <h2>What is RBN</h2>
                <p>Click the play button to watch short video about earning Rewards points with an RBN participating agent.</p>
            </Box>
            {playVideo && (
                <Overlay onClick={overlayClicked}>
                    <VideoContainer>
                        <Video controls autoPlay={true}/>
                        <Close onClick={() => setPlayVideo(false)} size={36}/>
                    </VideoContainer>
                </Overlay>
            )}
        </>
    )
};

export default VideoBox;