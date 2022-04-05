import styled from "styled-components/macro";

interface TeamStyledProps {
  mobileView: boolean;
}

/**Default layout*/
export const TeamContainer = styled.div<TeamStyledProps>`
  display: ${(props) => (props.mobileView ? "grid" : "flex")};
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

export const MobileView = styled.div``;
