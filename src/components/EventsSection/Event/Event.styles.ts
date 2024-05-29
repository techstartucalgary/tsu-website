import styled from "styled-components/macro";

export const Event = styled.div`
  background: linear-gradient(
    to top,
    var(--turquoise-blue),
    var(--turquoise-green)
  );
  padding: 1.5% 1.5%;
  @media (max-width: 1100px) {
    padding: 3% 3%;
  }

  margin-bottom: 5%;
  border-radius: 30px;
`;

export const EventImage = styled.img`
  border-radius: 20px;
  margin: 2%;
  width: 60%;
  float: left;
  clear: right;

  @media (max-width: 1100px) {
    width: 100%;
    margin: 0 0 3% 0;
  }
`;

export const DatetimeButtonDiv = styled.div`
  height: clamp(6vh, 6vh + 7%, 12vh);

  & > p {
    margin-bottom: 3vh;
  }
`;

export const EventText = styled.div`
  @media (max-width: 750px) {
    padding: 0% 0%;
  }
`;
