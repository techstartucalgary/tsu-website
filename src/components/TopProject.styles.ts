import styled from "styled-components/macro";

interface TopProjectProps {
    isVisible?: boolean;
}

export const TopProjectContainer = styled.div`
  border-radius: 20px;
  position: relative;
  justify-content: space-between;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: white;
  padding-top: 35%;
  margin-bottom: 2%;

  @media (max-width: 900px) {
    border-radius: 20px;
    position: relative;
    justify-content: space-between;
    width: 50%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    background: white;
    padding-top: 35%;
    margin-bottom: 2%;
    height:250px;
    margin: 0 auto;
  }
`;

export const TopProjectTitle = styled.div<TopProjectProps>`
  position: absolute;
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  top: 20%;
  left: 10%;
  right: 10%;
  transition: 0.3s ease-in-out;

  @media (max-width: 450px) {
    font-size: 3.5vw;
    bottom: 25%;
  }
  @media (max-width: 525px) {
    top: 15%;
  }

  @media (max-width: 900px) {
    font-size: 1.5rem;
    top: 10%;
  }
`;

export const TopProjectYear = styled.div<TopProjectProps>`
  position: absolute;
  text-align: left;
  font-style: italic;
  font-size: 1rem;
  color: black;
  top: 33%;
  left: 10%;
  right: 10%;
  transition: 0.3s ease-in-out;

  @media (max-width: 450px) {
    font-size: 3.5vw;
    bottom: 25%;
  }
  @media (max-width: 525px) {
    top: 15%;
  }
  @media (max-width: 900px) {
    font-size: 1rem;
    top: 18%;
  }
`;

export const TopProjectContent = styled.div<TopProjectProps>`
  /* We can change this, but position should be absolute still */
  position: absolute;
  text-align: left;
  font-size: 1rem;
  color: black;
  top: 45%;
  left: 10%;
  right: 25%; 
  width: 35%;
  transition: 0.3s ease-in-out;

  @media (max-width: 450px) {
    font-size: 3.5vw;
  }
  @media (max-width: 500px) {
    top: 35%;
  }
  @media (max-width: 900px) {
    font-size: 1rem;
    top: 30%;
     width: 90%;
  }
`;

export const TopProjectButton = styled.a`
  display: flex;
  align-items: center;
  background-color: var(--secondary-blue);
  font-size: 16px;
  font-weight: 500;
  text-shadow: 1px 1px black;
  border-radius: 30px;
  width: 100%;
  height: 53px;
  margin-top:40px;
  padding-top: 7px;
  transition: 200ms;
  display: block;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  color: white;
  text-align: left; 

  div {
    margin-left: 40px; 
    margin-bottom: 8px;
  }

  svg {
    font-size: 2.5rem; 
    color: black; 
    margin-right: 30px; 
    margin-bottom: 8px;
  }

  display: flex;
  justify-content: space-between; 

  &:hover {
    @media (min-width: 600px) {
      transform: translateY(-0.2em);
    }
  }

  &:focus {
    background-color: black;
  }

  @media (max-width: 450px) {
    position: relative;
    top: -30px;
    padding: 0px 20px;
    font-size: 5vw;
    transform: scale(0.5);
    background-color: var(--secondary-grey);
    border-radius: 30px;
    width: 50%;
    height: 40px;
    padding-top: 7px;
    margin: auto;
    margin-top: 15%;
    transition: 200ms;
    display: block;
    transition: 0.3s ease-in-out;
  }

   @media (max-width: 900px) {
        font-size: 1rem;
        width: 90%;
        margin-top:220px;
  }
`;

export const TopProjectImageContainer = styled.a`
  position: absolute;
  justify-content:center;
  align-items:center;
  top: 0;
  height: 65%;
  width: 40%;
  margin-left:55%;
  margin-top: 7%;
  transition: 0.3s ease-in-out;
  opacity: 1;
  border-radius: 20px;

   @media (max-width: 900px) {
        height: 40%;
        width: 90%;
        margin-left:5%;
        margin-top: 60%;
  }
`;

export const TopProjectImage = styled.img<TopProjectProps>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
 border-radius: 20px;
  transition: 0.3s ease-in-out;
  opacity: 1;
`;
