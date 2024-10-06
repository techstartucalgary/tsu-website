import React, { useMemo } from "react";
import { useState } from "react";
import Team from "./Team";
import * as S from "./TeamSection.styles";
import { executiveTeam, projectManagers, alumniTeam } from "./TeamInformation";
import { TeamCategory } from "./Team";

type TeamSectionProps = {
  desktopView: boolean;
};

const TeamSection = (props: TeamSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<TeamCategory>("executives");

  const getTeamMembers = useMemo(() => {
    switch (selectedCategory) {
      case "projectManagers":
        return projectManagers;
      case "alumni":
        return alumniTeam;
      default:
        return executiveTeam;
    }
  }, [selectedCategory]);

  return (
    <S.TeamSection>
      <S.ToggleButtonWrapper>
        <S.SliderWrapper selectedCategory={selectedCategory}>
          <S.SliderPosition selectedCategory={selectedCategory} />
          <S.SliderOption onClick={() => setSelectedCategory("executives")}>
            Executives
          </S.SliderOption>
          <S.SliderOption onClick={() => setSelectedCategory("projectManagers")}>
            Project Managers
          </S.SliderOption>
          <S.SliderOption onClick={() => setSelectedCategory("alumni")}>
            Alumni
          </S.SliderOption>
        </S.SliderWrapper>
      </S.ToggleButtonWrapper>
      <Team
        teamMembers={getTeamMembers}
        desktopView={props.desktopView}
        activeCategory={selectedCategory}
      />
    </S.TeamSection>
  );
};

export default React.memo(TeamSection);
