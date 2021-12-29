import styled from "styled-components/macro";

interface EventProps {
  imageLeft: boolean;
}

export const Event = styled.div`
  background: linear-gradient(
    to top,
    var(--turquoise-blue),
    var(--turquoise-green)
  );
  padding: 3% 3%;
  margin-bottom: 5%;
  border-radius: 30px;
`;

export const EventImage = styled.img<EventProps>`
  margin: 2%;
  width: 60%;

  float: ${(props) => (props.imageLeft ? "left" : "right")};
  clear: ${(props) => (props.imageLeft ? "right" : "")};

  @media (max-width: 750px) {
    width: 100%;
    loat: none;
    margin: 0%;
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
  margin-top: 5%;
`;
