import styled from 'styled-components';

interface Props {
    grow?: boolean
}

const Label = styled.label<Props>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    color: currentColor;
    font-family: 'BentonSans Book', sans-serif;
    margin-bottom: 15px;
    flex-grow: ${({grow}) => grow ? 1 : 0};
`;

export default Label;
