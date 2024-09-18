import styled from "styled-components/macro";

interface TeamStyledProps {
    mobileView: boolean;
}

export const FounderImg = styled.img.attrs({'data-testid': 'founder-img'})`
  border-radius: 80%;
`;

export const FounderImageContainer = styled.div`
  position: relative;
  margin-right: 50px;
  @media (max-width: 450px) {
    margin-right: 0px;
  }
`;

export const FounderContainer = styled.div<TeamStyledProps>`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 450px) {
    flex-direction: column;
    text-align: center;
    padding: 5vw;
  }
`;