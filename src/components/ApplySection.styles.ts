import styled from "styled-components/macro";

export const ApplicationContent = styled.article`
  padding: 20px;
  border-radius: 10px;
  color: rgb(20, 20, 20);
  text-align: center;
  position: relative;
  margin: 1%;
  justify-content: center;
  margin-bottom: 10%;
  font-size: clamp(16px, calc(0.15vw + 16px), 22px);
  line-height: 30px;
  font-weight: 300;

  & > li > p {
    margin-bottom: 10%;
    @media (max-width: 1100px) {
      margin-bottom: 20%;
    }
    @media (max-width: 799px) {
      margin-bottom: 0;
    }
    @media (max-width: 400px) {
      margin-bottom: 15%;
    }
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
