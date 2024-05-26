import styled from "styled-components/macro";

interface ProjectProps {
  isVisible?: boolean;
}

export const ProjectContainer = styled.a`
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

export const ProjectTitle = styled.div<ProjectProps>`
  position: absolute;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
  color: black;
  top: 20%;
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

export const ProjectContent = styled.div<ProjectProps>`
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
  }
  @media (max-width: 500px) {
    top: 35%;
  }
`;

export const ProjectImage = styled.img<ProjectProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
`;
