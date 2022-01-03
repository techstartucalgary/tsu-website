import styled from "styled-components/macro";

interface ProfileStyleProps {
  carouselView: boolean;
}

export const ProfileDiv = styled.div<ProfileStyleProps>`
  width: clamp(150px, 20%, 300px);
  margin: 0 1% 2.5rem;
  display: block;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.carouselView && "100%"};
  max-width: ${(props) => props.carouselView && "400px"};
  margin-bottom: ${(props) => props.carouselView && 0};
`;

export const ProfileIconDiv = styled.div`
  width: 100%;
  transition: 0.4s ease-in-out;

  & > img {
    width: 100%;
    height: 100%;
    transition: 0.4s ease-in-out;
    background-size: cover;
    background-color: white;
    border-radius: 50%;
  }
`;

export const LinksSection = styled.div`
  transition: 0.4s ease-in-out;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  align-items: center;
  justify-content: center;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 1rem;
`;
