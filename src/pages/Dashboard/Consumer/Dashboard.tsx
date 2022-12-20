import React from 'react';

import AuthenticatedPage from "../../../components/AuthenticatedPage";
import Boxes from "./Boxes";
import styled from "styled-components";
import VideoBox from "./Boxes/VideoBox";
import FootnoteSymbol from "../../../components/FootnoteSymbol";
import {amex, rbn} from "../../../config";
import amexLogo from "../../../images/amex-logo.jpg";
import AmEx from "./Boxes/AmEx";
import Buying from "./Boxes/Buying";
import Selling from "./Boxes/Selling";
import Consult from "./Boxes/Consult";
import Calculator from './Boxes/Calculator';

const AmexBlock = styled.div`
  color: ${({theme:{amexBlue}}) => amexBlue };
  
  @media (max-width: 800px) {
    display: none;
  }
  
  & > div {
    background: url(${amexLogo}) left center no-repeat;
    background-size: contain;
    padding: 12px 0 12px 6em;
    margin-bottom: 1rem;
    font-size: 18px;

    @media (max-width: 800px) {
      font-size: 4vw;
      padding-left: 18vw;
      padding-right: 2vw;
      font-weight: normal;
    }

    @media (max-width: 480px) {
      padding: 10px 1vw 10px 19vw;
    }
  }
  
  & > div > div:last-child {
    margin-top: 10px;
    
    font-weight: bold;
  }
  
  

`;

function ConsumerDashboard() {
    const buying = true;
    const selling = true;

    const buyPrice = 500000;
    const sellPrice = 0;

    const price = buyPrice + sellPrice;

    const bypassCheck = true;

    const boxes = [];

    if (bypassCheck || (selling && !sellPrice) || 500000 <= price) {
        const enableConsult = true;

        boxes.push(
            <VideoBox key="video" step={1}/>
        );

        boxes.push(<AmEx step={boxes.length + 1} key="amex"/>);

        if (buying) boxes.push(<Buying step={boxes.length + 1} key="buying"/>);
        if (selling) boxes.push(<Selling step={boxes.length + 1} key="selling"/>);

        boxes.push(<Consult step={boxes.length + 1} key="consult" disabled={!enableConsult}/>);
        boxes.push(<Calculator step={boxes.length + 1} key="calculator" disabled={false}/>);
    }

    const viewer = {
        firstName: 'John'
    };

    return (
        <AuthenticatedPage>
            <div>
                <AmexBlock>
                    <div>
                        <div>
                            {viewer.firstName}, earn Membership&nbsp;Rewards<sup>&reg;</sup> points when you buy or sell
                            a home with an RBN participating agent.<FootnoteSymbol>{rbn.footnote.symbol}{amex.footnote.symbol}</FootnoteSymbol>
                        </div>
                        <div>
                            Click each box to complete your profile.
                        </div>
                    </div>
                </AmexBlock>
            </div>
            <Boxes>{boxes}</Boxes>
        </AuthenticatedPage>
    );
}

export default ConsumerDashboard;
