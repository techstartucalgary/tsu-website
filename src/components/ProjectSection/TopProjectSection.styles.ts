import styled from "styled-components/macro";

export const TopProjectSectionDiv = styled.div`
  margin: 5% 5% 10% 5%;

  justify-content: center;
  display: flex; 
  flex-direction: column;
  
  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  @media (min-width: 1055px) and (max-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media (min-width: 1055px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }

  @media (max-width: 1055px) {
    margin-left: 8%;
  }

  @media (max-width: 600px) {
    margin-left: 11%;
  }
`;
