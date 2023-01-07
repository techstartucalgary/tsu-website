import styled from "styled-components/macro";

interface MerchItemStyleProps {
  mobileView: boolean;
}

export const MerchItemDiv = styled.div<MerchItemStyleProps>`
  width: clamp(150px, 20%, 300px);
  margin: 0 1% 2.5rem;
  display: block;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.mobileView && "100%"};
  max-width: ${(props) => props.mobileView && "400px"};
  margin-bottom: ${(props) => props.mobileView && 0};
`;

export const MerchItemIconDiv = styled.div`
  width: 100%;
  transition: 0.4s ease-in-out;

  & > img {
    width: 100%;
    height: 100%;
    transition: 0.4s ease-in-out;
    background-size: cover;
    background-color: white;
    position: relative;
    margin-top: 15px;
    aspect-ratio: 1.5 / 2;
  }
`;
