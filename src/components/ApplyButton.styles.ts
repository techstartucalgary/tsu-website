import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components/macro";

export const ApplyButton = styled.div`
  position: relative;
  height: 50px;
  width: 290px;
  color: var(--primary-green);
  background-color: var(--primary-black);
  border-radius: 30px;
  margin-top: 10%;
  display: flex;
  transition: transform 250ms ease-in-out;
  padding-top: 15px;
  padding-left: 2px;
  padding-right: 6px;
  justify-content: center;
  font-size: 20px;
  padding-top: 15px;
  cursor: pointer;
  margin-bottom: -15%;

  &: hover {
    transform: scale(1.1);
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

export const ApplyButtonArrow = styled.div`
  margin-left: 10px;
  width: 20px;
  animation: ${arrowSlide} 1.4s ease-in-out infinite;
`;

export const ApplyButtonText = styled.div`
  margin-left: 30px;
  font-family: "Consolas", monaco, monospace;
`;

export const ApplyButtonLink = styled(Link)`
  text-decoration: none;
`;
