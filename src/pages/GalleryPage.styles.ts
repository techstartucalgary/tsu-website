import styled from "styled-components/macro";
import * as S from "./GalleryPage.styles";

export const GalleryPage = styled.div`
  scroll-behavior: smooth;
  border: none;
  box-sizing: border-box;
  font-family: "Inter", Tahoma, sans-serif;
  line-height: 1.5;
  height: 100%;
  padding: 0;
  background: var(--dark-background);
  white-space: normal;
  overflow: hidden;
  position: relative;
`;

export const GalleryPageHeader = styled.div`
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
