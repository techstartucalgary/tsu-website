import styled from "styled-components/macro";

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
    transition: 0.4s ease-in-out;
    background-size: cover;
    background-color: white;
    border-radius: 50%;
    position: relative;
  }
`;

export const LinksSection = styled.div`
  transition: 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(150%, -50%);
  font-size: 0.9rem;
  background-color: rgb(213, 245, 227);
  border-radius: 50%;
  height: 60px;
  width: 60px;
`;
