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

  & > h2 {
    padding: 0 3vw;
  }
`;

export const ProjectsPageHeader = styled.div`
  @media (min-width: 750px) {
    display: flex;
  }

  background-color: white;
  padding: 5em 0;
  color: var(--secondary-grey);
  margin-bottom: 15%;
  @media (max-width: 750px) {
    margin-bottom: 25%;
  }
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

  & > div > p {
    font-size: 15vw;
    font-weight: bold;
    white-space: pre;
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

export const IdeaSubmitButtonDiv = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 1%;
`;

export const FinalShowcaseWinnerSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const FinalShowcaseWinnerDescription = styled.div`
  margin: 5% 5% 5% 5%;
  max-width: 1400px;
  display: grid;


  @media (min-width: 1550px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1055px) and (max-width: 1550px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1055px) {
    margin-left: 8%;
  }

  @media (max-width: 600px) {
    margin-left: 11%;
  }
`;

export const FinalShowcaseWinnerImage = styled.div`
  padding-left: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;

  & > div > img {
    object-fit: cover;
    display: block;
    width: 50vw;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
  }
    @media (max-width: 1055px) {
      & > div > img {
      width: 80vw;
      }
    }
`;

export const FinalShowcaseWinnerLinkedInButtonDiv = styled.div`
  justify-content: left;
  display: flex;
  margin-bottom: 1%;
`;
