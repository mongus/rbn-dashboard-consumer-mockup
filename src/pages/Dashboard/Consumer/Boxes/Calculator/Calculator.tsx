import { BsCalculatorFill as Icon } from "react-icons/all";

import { Checkmark, LinkBox, Props, Step } from "../Box";

const Calculator = ({ step }: Props) => {
  const address = "";

  return (
    <LinkBox to="/dashboard/calculator">
      {step && <Step>{step}</Step>}
      <Icon />
      <h2>Rewards Calculator</h2>
      <p>Click here to estimate your rewards.</p>
      {address && <Checkmark />}
    </LinkBox>
  );
};

export default Calculator;
