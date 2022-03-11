import styled from "styled-components/macro";

interface FeaturedProjectProps {
  isVisible?: boolean;
}

export const ProjectContainer = styled.div`
  border-radius: 20px;
  position: relative;
  justify-content: center;
  width: 95%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: linear-gradient(
    to top,
    var(--turquoise-blue),
    var(--turquoise-green)
  );
  margin-bottom: 10%;
`;

export const ProjectTitle = styled.div<FeaturedProjectProps>`
  position: absolute;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
  color: black;
  top: 25%;
  left: 10%;
  right: 10%;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};

  @media (max-width: 450px) {
    font-size: 3.5vw;
    bottom: 25%;
  }
  @media (max-width: 525px) {
    top: 15%;
  }
`;

export const ProjectContent = styled.div<FeaturedProjectProps>`
  /* We can change this, but position should be absolute still */
  position: absolute;
  text-align: center;
  font-size: 1rem;
  color: black;
  top: 40%;
  left: 10%;
  right: 10%;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};

  @media (max-width: 450px) {
    font-size: 3.5vw;
    top: 30%;
  }
`;

export const ProjectImage = styled.img<FeaturedProjectProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
`;

export const ProjectButton = styled.a`
  background-color: var(--secondary-grey);
  border-radius: 30px;
  width: 40%;
  height: 30px;
  padding-top: 7px;
  margin: auto;
  margin-top: 20px;
  transition: 200ms;
  display: block;
  transition: 0.3s ease-in-out;
  color: white;
  text-decoration: none;

  &: hover {
    @media (min-width: 600px) {
      color: var(--turquoise-blue);
      box-shadow: 2px 4px var(--primary-green);
      transform: translateY(-0.2em);
    }
  }

  &: focus {
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
`;
