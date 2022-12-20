import styled from "styled-components";
import thumb from "../../images/thumb.png";
import toolTipBG from "../../images/vector.png";

export const StyledInput = styled.input`
  -webkit-appearance: none;
  position: relative;
  width: 90%;
  cursor: pointer;
  align-self: stretch;
  margin: 51px 0px;
  border-radius: 50px;
  border: 1px solid black;
  height: 4px;
  background-color: #e6e0f6;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 50px;
    margin-top: 0px;
    width: 24px;
    height: 24px;
    background: url(${thumb}), white;
  }
`;

const SliderWrapper = styled.div`
  background: radial-gradient(
    43.46% 2038.56% at 50% 50%,
    #026cb6 0%,
    #08509a 100%
  );
  display: flex;
  position: relative;
  justify-content: center;
  width: 70%;
  min-width: 17rem;
  align-self: center;
  margin-top: 50px;
`;
const TooltipWrapper = styled.div`
    background: url(${toolTipBG}) no-repeat center;
    visibility: hidden; 
    position: absolute;
    top: -70px;
    padding: 41px 15px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    line-height: 22px;
    white-space: nowrap;
    transition: left 0.045s linear;
    }`;

interface SliderProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

const Slider = (props: SliderProps) => {
  const { value, changeHandler } = props;
  const range = document.getElementById("slider");
  const tooltip = document.getElementById("slider-tooltip");
  const sliderWrapper = document.getElementById("slider-wrapper");

  const steps = 19500000;
  const sliderMinimumValue = 500000;
  const sliderMaxValue = 20000000;

  const updateTooltip = () => {
    if (tooltip && range && sliderWrapper) {
      const padding = sliderWrapper.getBoundingClientRect().width * 0.05;
      const startPosition = 4 + padding - tooltip.clientWidth / 2;
      const stepWidth = (range.getBoundingClientRect().width - padding) / steps;
      const currentStep = value - sliderMinimumValue;
      const progressPercentage = (value / sliderMaxValue) * 100;
      tooltip.style.visibility = "visible";
      tooltip.style.left =
        Math.round(stepWidth * currentStep + startPosition) + "px";
      range.style.background = `linear-gradient(to right, #000000 0%, #000000 ${progressPercentage}%, #E6E0F6 ${progressPercentage}%, #E6E0F6 100%)`;
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeHandler(e);
    updateTooltip();
  };

  return (
    <>
      <SliderWrapper id="slider-wrapper">
        <StyledInput
          type="range"
          min={sliderMinimumValue}
          max={sliderMaxValue}
          step="1000"
          value={value}
          id="slider"
          onChange={handleSliderChange}
        />
        <TooltipWrapper id="slider-tooltip">{value / 1000}K</TooltipWrapper>
      </SliderWrapper>
    </>
  );
};

export default Slider;
