import styled from "styled-components/macro";

interface EventProps {
  pastEvent: boolean;
}

export const Event = styled.div<EventProps>`
  background: linear-gradient(
    to top,
    var(--turquoise-blue),
    var(--turquoise-green)
  );
  padding: 3% 3%;
  margin-bottom: 5%;
  border-radius: 30px;

  @media (min-width: 750px) {
    flex: ${(props) => props.pastEvent && "1"};
    margin: ${(props) => props.pastEvent && "auto 2%"};
  }
`;

export const EventImage = styled.img<EventProps>`
  margin: ${(props) => (props.pastEvent ? "auto" : "2%")};
  width: ${(props) => !props.pastEvent && "60%"};
  float: ${(props) => (props.pastEvent ? "right" : "left")};
  clear: ${(props) => (props.pastEvent ? "" : "right")};

  @media (max-width: 950px) {
    width: 100%;
    loat: none;
    margin: 0%;
    margin-bottom: 5%;
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
