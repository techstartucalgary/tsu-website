import React from "react";
import { useState } from "react";
import Team from "./Team";
import useViewport from "../UseViewport";
import * as S from "./TeamSection.styles";
import { executiveTeam, projectManagers } from "./TeamInformation";

const TeamSection = () => {
  const [toggle, setToggled] = useState(false);
  const handleChange = () => setToggled(!toggle);

  // set defaultView flag according to screen width cutoff value
  const { width } = useViewport(); // get screen width
  let defaultView = width > 600 ? true : false;

  const getTeamMembers = () => {
    return toggle ? projectManagers : executiveTeam;
  };

  return (
    <S.TeamSection>
      <S.ToggleButtonWrapper>
        <S.ToggleButton
          id="checkbox"
          type="checkbox"
          onClick={() => handleChange()}
        />
        <S.ToggleButtonLabel htmlFor="checkbox">
          <S.PMText>
            Project Managers &emsp; &emsp; &emsp;&emsp;&emsp; Executives
            <S.Slider></S.Slider>
          </S.PMText>
        </S.ToggleButtonLabel>
      </S.ToggleButtonWrapper>
      <Team
        teamMembers={getTeamMembers()}
        desktopView={defaultView}
        isExec={!toggle}
      />
    </S.TeamSection>
  );
};

export default React.memo(TeamSection);
