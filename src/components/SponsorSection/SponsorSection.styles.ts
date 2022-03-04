import styled from "styled-components/macro";

export const SponsorSection = styled.div`
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
  margin-bottom: 1%;
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
