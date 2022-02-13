import styled from "styled-components/macro";

export const ProjectKeywordsSectionDiv = styled.div`
  padding: 5vw 3vw;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  text-align: right;

  & > h3 {
    align-self: center;
    @media (max-width: 750px) {
      font-size: 1rem;
    }
  }

  & > h3 > p {
    margin: 0 3vw 0 0;
  }
`;

export const LottieDiv = styled.div`
  width: 20vw;
  height: 20vw;

  @media (max-width: 750px) {
    width: 35vw;
    height: 35vw;
  }
`;
