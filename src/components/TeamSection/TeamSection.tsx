import React from "react";
import { useState } from "react";
import Team from "./Team";
import * as S from "./TeamSection.styles";
import { executiveTeam, projectManagers } from "./TeamInformation";

type TeamSectionProps = {
  desktopView: boolean;
};

const TeamSection = (props: TeamSectionProps) => {
  const [toggle, setToggled] = useState(false);

  const getTeamMembers = () => {
    return toggle ? projectManagers : executiveTeam;
  };

  return (
    <S.TeamSection>
      <S.ToggleButtonWrapper>
        <S.ToggleButton
          id="checkbox"
          type="checkbox"
          onClick={() => setToggled(prev => !prev)}
        />
        <S.ToggleButtonLabel htmlFor="checkbox">
          <S.TeamCategoryText>
            Project Managers &emsp; &emsp; &emsp;&emsp;&emsp; Executives
            <S.Slider></S.Slider>
          </S.TeamCategoryText>
        </S.ToggleButtonLabel>
      </S.ToggleButtonWrapper>
      <Team
        teamMembers={getTeamMembers()}
        desktopView={props.desktopView}
        isExec={!toggle}
      />
    </S.TeamSection>
  );
};

export default React.memo(TeamSection);
