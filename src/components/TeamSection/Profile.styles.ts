import styled from "styled-components/macro";
import { SocialMediaColor, handleColor } from "../../utility/SharedStyles";

interface ProfileStyleProps {
  mobileView: boolean;
}

export const ProfileDiv = styled.div<ProfileStyleProps>`
  width: clamp(150px, 20%, 300px);
  margin: 0 1% 2.5rem;
  display: block;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.mobileView && "100%"};
  max-width: ${(props) => props.mobileView && "400px"};
  margin-bottom: ${(props) => props.mobileView && 0};
`;

export const ProfileIconDiv = styled.div`
  width: 100%;
  transition: 0.4s ease-in-out;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.4s ease-in-out;
    background-size: cover;
    background-color: white;
    border-radius: 50%;
    position: relative;
    margin-top: 15px;
    aspect-ratio: 1/1;
  }
`;

export const LinksSection = styled.div<{ backgroundColor: SocialMediaColor }>`
  transition: 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  position: aboslute;
  bottom: 0;
  right: 0;

  @media (min-width: 320px) and (max-width: 350px) {
    transform: translate(300%, -80%);
  }
  @media (min-width: 351px) and (max-width: 400px) {
    transform: translate(350%, -80%);
  }
  @media (min-width: 401px) and (max-width: 500px) {
    transform: translate(190%, -80%);
  }
  @media (min-width: 501px) and (max-width: 600px) {
    transform: translate(250%, -80%);
  }
  @media (min-width: 601px) and (max-width: 850px) {
    transform: translate(150%, -80%);
  }
  @media (min-width: 851px) and (max-width: 900px) {
    transform: translate(160%, -80%);
  }
  @media (min-width: 901px) and (max-width: 1000px) {
    transform: translate(180%, -80%);
  }
  @media (min-width: 1001px) and (max-width: 1100px) {
    transform: translate(200%, -80%);
  }
  @media (min-width: 1101px) and (max-width: 1200px) {
    transform: translate(200%, -80%);
  }
  @media (min-width: 1201px) and (max-width: 1300px) {
    transform: translate(220%, -80%);
  }
  @media (min-width: 1301px) and (max-width: 1400px) {
    transform: translate(230%, -80%);
  }
  @media (min-width: 1401px) and (max-width: 1500px) {
    transform: translate(240%, -80%);
  }
  @media (min-width: 1501px) and (max-width: 1600px) {
    transform: translate(250%, -80%);
  }
  @media (min-width: 1601px) and (max-width: 1750px) {
    transform: translate(260%, -80%);
  }
  @media (min-width: 1751px) and (max-width: 4000px) {
    transform: translate(280%, -80%);
  }
  @media (min-width: 1101px) and (max-width: 4000px) {
    height: 70px;
    width: 70px;
    font-size: 1rem;
  }
  font-size: 0.9rem;
  background-color: ${(backgroundColor) =>
    handleColor(backgroundColor.backgroundColor)};
  border-radius: 50%;
  height: 60px;
  width: 60px;
`;
