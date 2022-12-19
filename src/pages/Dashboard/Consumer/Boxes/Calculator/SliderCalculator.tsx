import React, { useState } from "react";
import AuthenticatedPage from "../../../../../components/AuthenticatedPage";
import { BsStarFill as Icon } from "react-icons/all";

import styled from "styled-components";
import { Slider } from "../../../../../components/form";

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 2rem;
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-top: 120px;
    color: ${({ theme: { accent } }) => accent};
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    line-height: 37px;
  }

  p + label {
    margin-top: 2rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;
  }
`;

const BoxesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: ${({ theme: { accent } }) => accent};
    font-weight: bold;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
    p {
        border: 3px solid ${({ theme: { accent } }) => accent};
        display: flex;
        padding-right: 1rem
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 46px;
        width: auto;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.5px;
        color: ${({ theme: { accent } }) => accent};

        
    }
    svg {
        margin: auto 8px;
    }

    @media (max-width: 960px) {
        flex-direction: column;
      }
`;

const SliderCalculator = () => {
  const [value, setValue] = useState(500000);
  const sliderChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.valueAsNumber);
  };

  return (
    <AuthenticatedPage>
      <Wrapper>
        <h2>Enter Purchase (Sale) price</h2>
        <Slider value={value} changeHandler={sliderChangeHandler} />
        <BoxesWrapper>
          <p>
            <Icon />
            {Math.floor(value * 0.6666).toLocaleString()}
          </p>
          <p>
            <Icon />
            {Math.floor(value * 0.8333333).toLocaleString()}
          </p>
          <p>
            <Icon />
            {value.toLocaleString()}
          </p>
        </BoxesWrapper>
        <p>
          For illustration purposes only. Real estate commissions rates are
          negotiable and may vary. Therefore, points value may also vary.
          Rewards are calculated from the home's purchase(sale) price and the
          RBN participating agent's commission for that specific home.
        </p>
      </Wrapper>
    </AuthenticatedPage>
  );
};

export default SliderCalculator;
