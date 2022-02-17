import styled from "styled-components/macro";

export const ProjectKeywordsSectionDiv = styled.div`
  padding: 7vw 3vw;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: right;
    padding-right: 12vw;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1.1fr;
      padding-right: 0;
    }

    @media (max-width: 500px) {
      padding-left: 10vw;
    }
  }

  & > h3 {
    align-self: center;
  }

  & > h3 > p {
  }
`;

export const GridItem = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Keyword = styled.h3`
  margin-top: 20%;
  margin-right: 10%;

  @media (max-width: 1000px) {
    margin-top: 25%;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  & > p {
    margin: 0;
  }
`;

export const LottieDiv = styled.div`
  width: 15vw;
  height: 15vw;

  @media (max-width: 1000px) {
    width: 30vw;
    height: 30vw;
  }
`;
