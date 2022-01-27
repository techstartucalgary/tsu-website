import styled from "styled-components/macro";

export const SponsorLogo = styled.a`
  display: block;
  position: relative;
  transform: scale(1);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  text-decoration: none;
  margin: 20px;
  transition: 3s;

  &: hover {
    opacity: 1;
  }
`;
