import styled from "styled-components/macro";

interface TeamStyledProps {
  mobileView: boolean;
}

/**Default layout*/
export const TeamContainer = styled.div<TeamStyledProps>`
  display: ${(props) => (props.mobileView ? "grid" : "flex")};
  @media (max-width: 400px) {
    grid-template-columns: 1fr};
  }
  grid-template-columns: ${(props) => props.mobileView && "1fr 1fr"};
  column-gap: ${(props) => props.mobileView && "10px"};
  flex-wrap: ${(props) => !props.mobileView && "wrap"};
  flex-direction: ${(props) => !props.mobileView && "row"};
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  max-width: 1400px;
  position: relative;
`;

export const EmptyStateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 2rem 0;
  font-family: "Inter", Tahoma, sans-serif;
`;

export const EmptyStateText = styled.p`
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
`;

export const EmptyStateSubtext = styled.p`
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
export const MobileView = styled.div``;
