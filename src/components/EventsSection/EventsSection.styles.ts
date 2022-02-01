import styled from "styled-components/macro";

interface EventsContainerProps {
  pastEvent: boolean;
}

export const EventsSectionContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
`;

export const EventsContainer = styled.div<EventsContainerProps>`
  display: flex;
  flex-wrap: ${(props) => props.pastEvent && "wrap"};
`;
