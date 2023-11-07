import React, { useState } from "react";
import * as S from "./Projects.styles";

interface projectProps {
  image?: string;
  github: string;
  description: string;
  name: string;
}
function Project(props: projectProps) {
  const [descriptionIsVisible, setDescriptionIsVisible] = useState(false);
  const [nameIsVisible, setNameIsVisible] = useState(false);

  function mouseLeave() {
    setDescriptionIsVisible(false);
    setNameIsVisible(false);
  }
  function mouseEnter() {
    setDescriptionIsVisible(true);
    setNameIsVisible(true);
  }
  return (
    <S.ProjectContainer
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      data-aos="zoom-in"
      data-aos-duration="2500"
    >
      <S.ProjectImage src={props.image} isVisible={!descriptionIsVisible} />

      <S.ProjectTitle isVisible={nameIsVisible}>{props.name}</S.ProjectTitle>

      <S.ProjectContent isVisible={descriptionIsVisible}>
        {props.description}
        {props.github !== "" &&
          <S.ProjectButton href={props.github} target="_blank">
            <div>Visit Project</div>
          </S.ProjectButton>
        }
      </S.ProjectContent>
    </S.ProjectContainer>
  );
}

export default React.memo(Project);
