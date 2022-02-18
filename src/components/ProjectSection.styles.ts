import styled from "styled-components/macro";

export const ProjectSectionDiv = styled.div`
  margin: 5% 5% 10% 5%;

  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1055px) and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1055px) {
    display: grid;
    margin-left: 7%;
  }

  @media (max-width: 1055px) {
    margin-left: 8%;
  }

  @media (max-width: 600px) {
    margin-left: 11%;
  }
`;
