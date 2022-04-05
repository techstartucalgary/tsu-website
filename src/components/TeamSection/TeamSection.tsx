import React, { ChangeEvent } from "react";
import { useState } from "react";
import Team from "./Team";
import useViewport from "../UseViewport";
import * as S from "./TeamSection.styles";
import { executiveTeam, projectManagers } from "./TeamInformation";
import Divider from "components/Divider";

const TeamSection = () => {
  const { width } = useViewport(); // get screen width
  const [toggle, setToggled] = useState(false);
  const handleChange = () => setToggled(!toggle);
  // set defaultView flag according to screen width cutoff value
  let defaultView = width > 600 ? true : false;

  return (
    <div>
      <span className="team_switch">
        <label className="team_switch_label">
          {toggle ? (
            <Team teamMembers={projectManagers} desktopView={defaultView} />
          ) : (
            <Team teamMembers={executiveTeam} desktopView={defaultView} />
          )}
          <input type="checkbox" onClick={() => handleChange()}></input>
          <span className="team_switch_span"></span>
        </label>
      </span>
    </div>
  );
};

export default React.memo(TeamSection);
