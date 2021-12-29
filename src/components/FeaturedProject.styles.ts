import styled from "styled-components/macro";

interface FeaturedProjectProps {
  isVisible?: boolean;
}

export const ProjectContainer = styled.div`
  border-radius: 20px;
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: linear-gradient(
    to top,
    var(--turquoise-blue),
    var(--turquoise-green)
  );
`;

export const ProjectContent = styled.div<FeaturedProjectProps>`
  /* We can change this, but position should be absolute still */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  font-size: var(--regular-font);
  color: black;
  top: 30%;
  left: 10%;
  right: 10%;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};

  @media (max-width: 400px) {
    transform: translateY(-20px);
  }
`;

export const ProjectImage = styled.img<FeaturedProjectProps>`
  position: absolute;
  top: 0;
  bottom: 0;
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
    color: var(--turquoise-blue);
    box-shadow: 2px 4px #4dd6a8;
    transform: translateY(-0.2em);
  }

  &: focus {
    background-color: black;
  }

  @media (max-width: 400px) {
    position: relative;
    top: -30px;
    padding: 20px 20px;
    font-size: initial;
    transform: scale(0.5);
  }
`;
