import styled from "styled-components/macro";

export const MerchSection = styled.div`
  padding: 5vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  text-align: center;

  & > h4 {
    font-size: var(--babyHeading-size);
    color: var(--primary-black);
    margin-bottom: 0;

    @media (max-width: 800px) {
      font-size: var(--babyHeading-size);
    }
  }

  & > img {
    object-fit: cover;
    width: 85vw;
    max-width: 900px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
    margin-bottom: 2%;
  }
`;
