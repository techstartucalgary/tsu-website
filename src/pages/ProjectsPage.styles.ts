import styled from "styled-components/macro";

export const ProjectsPage = styled.div`
  scroll-behavior: smooth;
  border: none;
  box-sizing: border-box;
  font-family: "Inter", Tahoma, sans-serif;
  line-height: 1.5;
  height: 100%;
  padding: 0;
  background-image: var(--dark-background);
  white-space: normal;
  overflow: hidden;
  position: relative;
`;

export const ProjectsPageHeader = styled.div`
  @media (min-width: 750px) {
    display: flex;
  }

  background-color: white;
  padding: 5em 0;
  color: var(--secondary-grey);
  margin-bottom: 10%;
`;

export const ProjectsPageHeaderItem = styled.div`
  @media (min-width: 750px) {
    flex-basis: 50%;
    flex-grow: 0;
    flex-shrink: 0;
    align-self: flex-end;
  }

  & > div {
    @media (max-width: 749px) {
      margin-top: 5%;
      display: flex;
      justify-content: center;
    }
  }

  & > div > h1 {
    white-space: pre;
    font-size: 15vw;
    @media (min-width: 750px) {
      font-size: 8vw;
      text-align: left;
    }
    margin: 0;
  }
`;

export const LottieDiv = styled.div`
  @media (min-width: 750px) {
    height: 35vw;
    width: 35vw;
    margin: 0px 0px 0px 25%;
  }
`;
