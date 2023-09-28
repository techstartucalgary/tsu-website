import styled from "styled-components/macro";

export const TeamPage = styled.div`
  scroll-behavior: smooth;
  border: none;
  box-sizing: border-box;
  font-family: "Inter", Tahoma, sans-serif;
  line-height: 1.5;
  height: 100%;
  padding: 0;
  background-image: var(--dark-background);;
  white-space: normal;
  overflow: hidden;
  position: relative;
`;

export const TeamPageHeader = styled.div`
  background-color: white;
  padding: 3em 0;
  text-align: center;
  color: var(--secondary-grey);

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
