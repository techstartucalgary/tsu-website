import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components/macro";

export enum ButtonMode {
  TRANSPARENT,
  DARK,
  GRADIENT,
}

interface CustomButtonStyleProps {
  mode: ButtonMode;
  glowOnHover?: boolean;
  hover?: boolean;
}

export const CustomButton = styled.a<CustomButtonStyleProps>`
  float: right;
  border: ${(props) => props.mode === ButtonMode.TRANSPARENT && "0.1rem solid"};
  border-radius: 30px;
  padding: 1rem 1rem;
  font-size: clamp(0.8rem, calc(2vw + 0.2rem), 1rem);
  transition: 0.3s ease-in-out;
  text-decoration: none;
  text-align: center;
  color: ${(props) =>
    props.mode == ButtonMode.DARK ? "white" : "var(--primary-black)"};
  background-color: ${(props) =>
    props.mode == ButtonMode.DARK && "var(--primary-black)"};
  background: ${(props) =>
    props.mode == ButtonMode.GRADIENT &&
    "linear-gradient(to top, var(--turquoise-blue), var(--turquoise-green))"};

    ${(props) =>
      props.hover &&
      `
      &: hover {
        cursor: pointer;
        transform: translateY(-0.25rem);
        box-shadow: ${(props: { glowOnHover: boolean }) =>
          props.glowOnHover && "0 5px 15px rgba(145, 92, 182, 0.4)"};
        @media (max-width: 900px) {transform: none;} 
          
      `} 
  }

  @media (max-width: 900px) {
    padding: 0.5rem 1rem;
  }
`;

const arrowSlide = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(20px);
  }
`;

export const CustomButtonArrow = styled.div`
  margin-left: 10px;
  width: 20px;
  animation: ${arrowSlide} 1.4s ease-in-out infinite;
`;

export const CustomButtonText = styled.div`
  margin-left: 30px;
  font-family: "Consolas", monaco, monospace;
`;

export const CustomButtonLink = styled(Link)`
  text-decoration: none;
`;
