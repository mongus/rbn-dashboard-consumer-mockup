import {Link} from "react-router-dom";
import {ButtonProps, ButtonStyle} from "./Button";
import styled from "styled-components";

const LinkButton = styled(Link)<ButtonProps>`
  ${ButtonStyle}
`;

export default LinkButton;