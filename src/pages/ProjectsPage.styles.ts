import styled from "styled-components/macro";

export const ProjectsPage = styled.div`
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

export const ProjectsPageHeader = styled.div`
  display: flex;
  background-image: var(--dark-background);
  padding: 3em 0;
  color: white;
`;

export const ProjectsPageHeaderItem = styled.div`
  flex-basis: 50%;
  flex-grow: 0;
  flex-shrink: 0;
  align-self: flex-end;
  & > h1 {
    font-size: 8vw;
    text-align: left;
    margin: 0;
  }
`;
