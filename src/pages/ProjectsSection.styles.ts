import styled from "styled-components/macro";

export const ProjectsSection = styled.section`
  background-image: var(--dark-background);
  color: white;
  padding: 3em 0em 8em 0em;
`;

export const ProjectDescriptionDiv = styled.div`
  margin-top: 3vw;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const projectButtonDiv = styled.div`
  @media (max-width: 1000px) {
    margin-top: 10vw;
  }

  @media (min-width: 1000px) {
    margin: 3vw 0 0 0;
    width: fit-content;
  }
`;

export const ProjectsSectionItem = styled.div`
  & > p {
    text-align: left;
    margin: 0;
  }
  width: fit-content;
`;

export const LottieDiv = styled.div`
  height: 25vw;
  width: 25vw;
`;
