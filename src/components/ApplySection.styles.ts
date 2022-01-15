import styled from "styled-components/macro";

export const ApplicationContent = styled.article`
  padding: 20px;
  border-radius: 10px;
  color: rgb(20, 20, 20);
  text-align: center;
  position: relative;
  margin: 1%;
  justify-content: center;
  margin-bottom: 40px;

  & > h2 {
    font-size: clamp(24px, calc(0.15vw + 24px), 30px);
    font-weight: 500;
    text-transform: capitalize;
    line-height: 30px;
  }

  & > h3 {
    font-size: clamp(16px, calc(0.15vw + 16px), 22px);
    text-transform: capitalize;
    line-height: 30px;
    font-weight: 300;
    margin-top: 10%;
    margin-bottom: 0;
  }

  & > p {
    font-size: clamp(16px, calc(0.15vw + 16px), 22px);
    line-height: 30px;
    font-weight: 300;
  }

  @media (min-width: 800px) {
    position: relative;
    min-height: max-content;
    width: 30%;
    margin: 1%;
    justify-content: center;
    color: rgb(20, 20, 20);
    background-color: rgb(255, 255, 255);
  }
`;
