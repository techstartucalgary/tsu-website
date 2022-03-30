import styled from "styled-components/macro";

export const ProjectsSection = styled.section`
  background-image: var(--dark-background);
  color: white;
  padding: 3em 0em 8em 0em;

  @media (max-width: 500px) {
    padding: 3em 0em 5em 0em;
  }
`;

export const ProjectDescriptionDiv = styled.div`
  margin-top: 3vw;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (min-width: 1201px) {
    grid-template-columns: 2fr 1.1fr;
  }

  @media (min-width: 1401px) {
    grid-template-columns: 2fr 1.2fr;
  }
`;

export const projectButtonDiv = styled.div`
  @media (max-width: 1200px) {
    margin-top: 12vw;
  }

  @media (min-width: 1200px) {
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
  height: 30vw;
  width: 30vw;

  @media (max-width: 1200px) {
    margin: 0 0 5vw 12vw;
    height: 60vw;
    width: 60vw;
    align-items: center;
  }

  @media (min-width: 1201px) {
    position: absolute;
    bottom: 0;
    margin-bottom: 8vw;
  }
`;
