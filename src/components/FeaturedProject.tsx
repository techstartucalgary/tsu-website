import React, { useState } from "react";
import * as S from "./FeaturedProject.styles";

interface featuredProjectProps {
  image?: string;
  github: string;
  description: string;
  name: string;
}
function FeaturedProject(props: featuredProjectProps) {
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
        <S.ProjectButton href={props.github} target="_blank">
          <div>Visit Project</div>
        </S.ProjectButton>
      </S.ProjectContent>
    </S.ProjectContainer>
  );
}

export default React.memo(FeaturedProject);
