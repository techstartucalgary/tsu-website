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
  padding: 1.5% 1.5%;
  @media (max-width: 1100px) {
    padding: ${(props) => !props.pastEvent && "3% 3%"};
  }

  margin-bottom: 5%;
  border-radius: 30px;

  @media (min-width: 750px) {
    flex: ${(props) => props.pastEvent && "1"};
    margin: ${(props) => props.pastEvent && "auto 1%"};
    margin-top: ${(props) => props.pastEvent && "10%"};
  }
`;

export const EventImage = styled.img<EventProps>`
  border-radius: 20px;
  margin: ${(props) => (props.pastEvent ? "auto" : "2%")};
  width: ${(props) => (props.pastEvent ? "100%" : "60%")};
  float: ${(props) => !props.pastEvent && "left"};
  clear: ${(props) => (props.pastEvent ? "" : "right")};

  @media (max-width: 1100px) {
    width: 100%;
    margin: 0%;
    margin-bottom: ${(props) => !props.pastEvent && "5%"};
  }
  &: hover {
    box-shadow: ${(props) =>
      props.pastEvent &&
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"};
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
