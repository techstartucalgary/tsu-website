import styled from "styled-components/macro";

export const Footer = styled.div`
  padding: 3rem 1rem;
  color: black;
  font-size: clamp(0.8rem, calc(2vw + 0.2rem), 1rem);
  width: -webkit-fill-available;
  min-height: 5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background-color: var(--secondary-blue);
  background-image: linear-gradient(
    45deg,
    var(--secondary-lime),
    var(--secondary-blue)
  );
  background-size: 100%;

  @media (max-width: 900px) {
    display: block;
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;
  }
`;

export const SocialMediaSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem; // 3 2

  @media (max-width: 900px) {
    padding: 3.5rem 1rem;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  padding: 0rem 1rem;
`;

export const HoverButtonDiv = styled.div`
  padding: 0rem 1rem;
`;
