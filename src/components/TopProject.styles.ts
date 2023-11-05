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

export const TopProjectContent = styled.div<TopProjectProps>`
  /* We can change this, but position should be absolute still */
  position: absolute;
  text-align: left;
  font-size: 1rem;
  color: black;
  top: 45%;
  left: 10%;
  right: 15%; 
  width: 35%;
  transition: 0.3s ease-in-out;

   @media (min-width: 900px) and (max-width:930px) {
        font-size: 0.8rem;
  }
    @media (max-width: 900px) {
    font-size: 0.9rem;
    top: 25%;
    width: 90%;
  }
   @media (max-width: 660px) {
    font-size: 0.8rem;
  }
   @media (max-width: 500px) {
    font-size: 0.7rem;
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

  @media (min-width: 930px) and (max-width:1050px) {
        margin-top:20px;
  }

  @media (min-width: 900px) and (max-width:930px) {
        margin-top:10px;
  }

   @media (max-width: 960px) {
        font-size: 0.9rem;
        
  } 
   @media (max-width: 900px) {
        font-size: 1rem;
        width: 90%;
        margin-top:15px;
        font-size: 13px;
        height: 45px;
  }
   @media (max-width: 800px) {
        font-size: 12px;
  }

  @media (max-width: 700px) {
        font-size: 10px;
         height: 40px;
  }
   @media (max-width: 660px) {
        
        font-size: 10px;
        height: 40px;
  }
  @media (max-width: 550px) {
        font-size: 8px;
  }
   @media (max-width: 450px) {
        height: 35px;
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
  

   @media (max-width: 900px) {
        height: 40%;
        margin-left:5%;
        margin-top: 75%;
        width: 100%;
        margin-left:0%;
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

export const TopProjectImage = styled.img<TopProjectProps>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transition: 0.3s ease-in-out;
  opacity: 1;
`;
