import React from "react";

import Team from "./Team";
import useViewport from "../UseViewport";
import * as S from "./TeamSection.styles";
import { executiveTeam, projectManagers } from "./TeamInformation";
import Divider from "components/Divider";

const TeamSection = () => {
  const { width } = useViewport(); // get screen width

  // set defaultView flag according to screen width cutoff value
  let defaultView = width > 600 ? true : false;

  return (
    <S.TeamSection>
      {/*Toggle Button*/}
      <h2>Executives</h2>
      <Divider />
      <Team teamMembers={executiveTeam} desktopView={defaultView} />
      <h2>Project Managers</h2>
      <Divider />

      <Team teamMembers={projectManagers} desktopView={defaultView} />
    </S.TeamSection>
  );
};

export default React.memo(TeamSection);
