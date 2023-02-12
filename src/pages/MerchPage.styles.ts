import styled from "styled-components/macro";

export const MerchPage = styled.div`
  scroll-behavior: smooth;
  border: none;
  box-sizing: border-box;
  font-family: "Inter", Tahoma, sans-serif;
  line-height: 1.5;
  height: 100%;
  padding: 0;
  background-color: white;
  white-space: normal;
  overflow: hidden;
  position: relative;
`;

export const MerchPageHeader = styled.div`
  background-color:black;
  padding: 3em 0;
  text-align: center;
  color: white;
  

  & > h1 {
    font-size: var(--title-size);
  }

  & > p {
    font-size: var(--babyHeading-size);
    @media (max-width: 700px) {
      font:size: var(--regular-font);
    }
    
  }

  & > div {
    margin-top: 3vw;
    justify-content: center;
    display: flex;

  }
`;
export const MerchPageHeaderItem = styled.div`
  @media (min-width: 900px) {
    flex-basis: 50%;
    flex-grow: 0;
    flex-shrink: 0;
    align-self: flex-end;
    margin-right: 40%;
    & > div > h1 {
      float: left;
    }
  }

  & > div {
    @media (max-width: 899px) {
      margin-top: 5%;
      display: block;
      justify-content: center;
    }
  }

  & > div > p {
    font-size: 15vw;
    font-weight: bold;
    white-space: pre;
    @media (min-width: 900px) {
      font-size: 8vw;
      text-align: left;
      margin-top: -40%;
    }
    margin: 0;
  }
`;

export const LottieDiv = styled.div`
  @media (min-width: 900px) {
    height: 30vw;
    width: 40vw;
    margin: 0vw -80vw 0px 25%;
  }
`;
