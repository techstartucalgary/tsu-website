import styled from "styled-components/macro";

export const SponsorSection = styled.div`
  display: flex;
  gap: 1.5em;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;

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
`;
