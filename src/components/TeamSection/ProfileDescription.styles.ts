import styled from "styled-components/macro";

export const ProfileDescriptionDiv = styled.div`
  width: 100%;
  display: inline-block;
  align-self: center;
  text-align: center;
  margin: -20%;
  font-family: "Inter", Tahoma, sans-serif;

  & > h3 {
    color: white;
    font-size: 1.5rem;
    font-weight: 900;
    margin: 0%;
    @media (max-width: 950px) and (min-width: 650px) {
      font-size: 1.1rem;
    }
    @media (max-width: 350px) {font-size: 1.2rem;}
  }

  & > h4 {
    margin: 0%;
    color: white;
    font-weight: 300;
    font-size: 1.1rem;  
    @media (max-width: 950px) and (min-width: 650px) {
      font-size: 0.95rem;
    }
    @media (max-width: 350px) {font-size: 1rem;
    }
`;
