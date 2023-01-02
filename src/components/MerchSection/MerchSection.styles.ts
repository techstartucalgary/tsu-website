import styled from "styled-components/macro";

export const MerchSection = styled.div`
  padding: 5vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  text-align: center;

  & > h2 {
    font-size: var(--chonky-header-size);
    font-weight: var(--chonky-header-weight);
    color: var(--primary-black);
    margin-bottom: 0;

    @media (max-width: 800px) {
      font-size: var(--thicc-subheading-size);
    }
  }
`;
