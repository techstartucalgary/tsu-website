import React, { useState } from "react";
import * as S from "./FeaturedProject.styles";

interface featuredProjectProps {
  image?: string;
  github: string;
  description: string;
}
function FeaturedProject(props: featuredProjectProps) {
  const [descriptionIsVisible, setDescriptionIsVisible] = useState(false);

  function mouseLeave() {
    setDescriptionIsVisible(false);
  }
  function mouseEnter() {
    setDescriptionIsVisible(true);
  }
  return (
    <S.ProjectContainer
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      data-aos="zoom-in"
      data-aos-duration="2500"
    >
      <S.ProjectImage src={props.image} isVisible={!descriptionIsVisible} />

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
