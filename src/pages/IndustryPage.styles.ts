import styled from "styled-components/macro";

export const IndustryPage = styled.div`
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

export const IndustryPageHeader = styled.div`
  background-image: var(--dark-background);
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

export const SponsorSection = styled.div`
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
  display: flex;
  gap: 1.5em;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 7%;

  & > * {
    flex-basis: 30%;
    min-width: 10em;
  }
`;

export const SponsorLogoDiv = styled.div`
  transition: 200ms ease-in-out;

  &: hover {
    transform: translateY(-0.25em);
  }
`;

export const SponsorButtonDiv = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 15%;
`;

export const SponsorCallToActionDiv = styled.div`
  & > p {
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;
    color: var(--secondary-grey);
  }
  margin-bottom: 5%;
`;
