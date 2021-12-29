import React from "react";

import Team from "./Team";
import useViewport from "../UseViewport";
import * as S from "./TeamSection.styles";
import "../../App.css";
import { executiveTeam, projectManagers } from "./TeamInformation";
import Divider from "components/Divider";
import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";

const TeamSection = () => {
  const { width } = useViewport(); // get screen width
  const breakpoint = 600; // set breakpoint

  // set headers and defaultView flag according to screen width
  let headers = [];
  let defaultView = true;
  if (width > breakpoint)
    headers = ["chonkyHeading", "thiccSubheading", "regularText--larger"];
  else {
    headers = ["thiccSubheading", "babyHeading", ""];
    defaultView = false;
  }

  return (
    <S.TeamSection>
      <S.TeamSection__margin>
        <h1 className="chonkyHeading chonkyHeading--lessMargin">Our Team</h1>
        <Divider />

        <div
          className={"regularText " + headers[2]}
          style={{ padding: "5px 0 24px", textAlign: "center" }}
        >
          <p>
            Tech Start is only possible thanks to our team of talented,
            passionate leaders. Interested in joining us?
          </p>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <HoverButton
              mode={ButtonMode.GRADIENT}
              link="/apply"
              text={"Apply Now"}
              linkIsInternal={true}
            />
          </div>
        </div>

        <h2
          className="thiccSubheading thiccSubheading--weak"
          style={{ textAlign: "center" }}
        >
          <u>Executives</u>
        </h2>
      </S.TeamSection__margin>
      <Team teamMembers={executiveTeam} defaultView={defaultView} />
      <div className="TeamSection__margin">
        <h2
          className="thiccSubheading thiccSubheading--weak"
          style={{ textAlign: "center" }}
        >
          <u>Project Managers</u>
        </h2>
      </div>
      <Team teamMembers={projectManagers} defaultView={defaultView} />
    </S.TeamSection>
  );
};

export default React.memo(TeamSection);
