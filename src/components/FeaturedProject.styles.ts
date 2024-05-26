import styled from "styled-components/macro";

interface FeaturedProjectProps {
  isVisible?: boolean;
}

export const FeaturedProjectContainer = styled.div`
  border-radius: 20px;
  position: relative;
  justify-content: space-between;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: white;
  padding-top: 35%;
  margin-bottom: 2%;

  @media (max-width: 900px) {
    width: 50%;
    height:250px;
    margin: 0 auto;
  }
  @media (max-width: 660px) {
    width: 60%;
    height:280px;
  }
  @media (max-width: 500px) {
    width: 70%;
    height:270px;
  }
  @media (max-width: 400px) {
    width: 80%;
  }
 
`;

export const FeaturedProjectTitle = styled.div<FeaturedProjectProps>`
  position: absolute;
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  top: 20%;
  left: 10%;
  right: 10%;
  transition: 0.3s ease-in-out;

  @media (min-width: 900px) and (max-width:1100px) {
       top: 9%;
  }
   @media (max-width: 900px) {
    font-size: 1.5rem;
    top: 10%;
  }
  @media (min-width: 250px) and (max-width:320px) {
     font-size: 1.5rem;
  }
  
`;

export const FeaturedProjectYear = styled.div<FeaturedProjectProps>`
  position: absolute;
  text-align: left;
  font-style: italic;
  font-size: 1rem;
  color: black;
  top: 33%;
  left: 10%;
  right: 10%;
  transition: 0.3s ease-in-out;

  @media (min-width: 900px) and (max-width:1100px) {
       top: 25%;
  }
   @media (max-width: 900px) {
    font-size: 1rem;
    top: 18%;
  }
  @media (min-width: 250px) and (max-width:320px) {
     font-size: 0.8rem;
     top: 19%;
  }
 
`;

export const FeaturedProjectContent = styled.div<FeaturedProjectProps>`
  position: absolute;
  text-align: left;
  font-size: 0.9rem;
  color: black;
  top: 45%;
  left: 10%;
  right: 15%; 
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: start;
  transition: 0.3s ease-in-out;

  @media (max-width: 900px) {
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    top: 25%;
    text-align: center;
    align-items: center;
  }

  @media (min-width: 900px) and (max-width: 930px) {
    font-size: 0.8rem;
  }
  @media (max-width: 660px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

export const FeaturedProjectImage = styled.img<FeaturedProjectProps>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transition: 0.3s ease-in-out;
  opacity: 1;
`;

export const FeaturedProjectMediaContainer = styled.div<FeaturedProjectProps>`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 65%;
  width: 40%;
  margin-left: 55%;
  margin-top: 7%;
  transition: 0.3s ease-in-out;
  opacity: 1;
  z-index: 0;
  

    @media (max-width: 900px) {
    height: 40%;
    margin-left: 5%;
    margin-top: auto; /* Auto means it will be positioned at the bottom */
    width: 98.9%;
    margin-left: 0%;
    top: auto;
    bottom: 0;
  }

  @media (max-width: 800px) {
        margin-top: 80%;
  }
  @media (max-width: 730px) {
        margin-top: 85%;
  }
  @media (max-width: 660px) {
        height: 40%;
        margin-top: 85%;
  }
  @media (max-width: 550px) {
        height: 35%;
        margin-top: 95%;
  }
  @media (max-width: 500px) {
        margin-top: 90%;
  }
  @media (max-width: 400px) {
        margin-top: 85%;
  }
  @media (max-width: 350px) {
        margin-top: 95%;
  }
   @media (max-width: 325px) {
        margin-top: 105%;
  }
`;
