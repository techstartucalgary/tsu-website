import React from "react";
import { useState } from "react";
import Team from "./Team";
import * as S from "./TeamSection.styles";
import { executiveTeam, projectManagers, alumniTeam } from "./TeamInformation";

type TeamSectionProps = {
  desktopView: boolean;
};

const TeamSection = (props: TeamSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<"executives" | "projectManagers" | "alumni">("executives");

  const getTeamMembers = () => {
    switch (selectedCategory) {
      case "projectManagers":
        return projectManagers;
      case "alumni":
        return alumniTeam;
      default:
        return executiveTeam;
    }
  };

  return (
    <S.TeamSection>
      <S.ToggleButtonWrapper>
        <S.ToggleButton
          id="executives"
          type="radio"
          checked={selectedCategory === "executives"}
          onChange={() => setSelectedCategory("executives")}
        />
        <S.ToggleButtonLabel htmlFor="executives">
          Executives
        </S.ToggleButtonLabel>
        <S.ToggleButton
          id="projectManagers"
          type="radio"
          checked={selectedCategory === "projectManagers"}
          onChange={() => setSelectedCategory("projectManagers")}
        />
        <S.ToggleButtonLabel htmlFor="projectManagers">
          Project Managers
        </S.ToggleButtonLabel>

        <S.ToggleButton
          id="alumni"
          type="radio"
          checked={selectedCategory === "alumni"}
          onChange={() => setSelectedCategory("alumni")}
        />
        <S.ToggleButtonLabel htmlFor="alumni">
          Alumni
        </S.ToggleButtonLabel>
      </S.ToggleButtonWrapper>
      <Team
        teamMembers={getTeamMembers()}
        desktopView={props.desktopView}
        activeCategory={selectedCategory}
      />
    </S.TeamSection>
  );
};

export default React.memo(TeamSection);
