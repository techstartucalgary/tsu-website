import React, { useState } from "react";
import * as S from "./Projects.styles";

interface projectProps {
  image: string;
  github: string;
  description: string;
  name: string;
}
const Project = (props: projectProps) => {
  const [descriptionIsVisible, setDescriptionIsVisible] = useState(false);
  const [nameIsVisible, setNameIsVisible] = useState(false);

  const toggleProjectDetails = () => {
    setDescriptionIsVisible(!descriptionIsVisible);
    setNameIsVisible(!nameIsVisible);
  }
  return (
    <a href={props.github} target="_blank">
    <S.ProjectContainer
      onMouseEnter={toggleProjectDetails}
      onMouseLeave={toggleProjectDetails}
      data-aos="zoom-in"
      data-aos-duration="2500"
    >

      <S.ProjectImage src={props.image} isVisible={!descriptionIsVisible} />

      <S.ProjectTitle isVisible={nameIsVisible}>{props.name}</S.ProjectTitle>

      <S.ProjectContent isVisible={descriptionIsVisible}>
        {props.description}

      </S.ProjectContent>
    </S.ProjectContainer>
    </a>
  );
}

export default React.memo(Project);
