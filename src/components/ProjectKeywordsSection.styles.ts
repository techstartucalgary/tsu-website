import styled from "styled-components/macro";

export const ProjectKeywordsSectionDiv = styled.div`
  padding: 5vw 3vw;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: right;
    padding-right: 10vw;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1.1fr;
      padding-right: 0;
    }
  }

  & > h3 {
    align-self: center;
  }

  & > h3 > p {
    margin: 0 3vw 0 0;
  }
`;

export const GridItem = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Keyword = styled.h3`
  margin-top: 25%;
  margin-right: 10%;

  & > p {
    margin: 0;
  }
`;

export const LottieDiv = styled.div`
  width: 20vw;
  height: 20vw;

  @media (max-width: 1000px) {
    width: 35vw;
    height: 35vw;
  }
`;
