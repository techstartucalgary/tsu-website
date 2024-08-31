import React from "react";
import Profile from "./Profile";
import * as S from "./Team.styles";
import "./Team.styles.ts";
import { type TeamMember } from "./TeamInformation";
import { executiveTeam, projectManagers, alumniTeam } from "./TeamInformation";

type TeamProps = {
  teamMembers: TeamMember[];
  desktopView: boolean;
  activeCategory: "executives" | "projectManagers" | "alumni";
};
const Team = (props: TeamProps) => {
  const baseLength = (() => {
    switch (props.activeCategory) {
      case "executives":
        return executiveTeam.length;
      case "projectManagers":
        return projectManagers.length;
      case "alumni":
        return alumniTeam.length;
      default:
        return 0;
    }
  })();
  return (
    <S.TeamContainer mobileView={!props.desktopView}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {props.teamMembers.map((member: TeamMember) => {
        return (
          <Profile
            key={member.id + baseLength}
            member={member}
            profilePic={member.image}
            alt={member.image}
            mobileView={!props.desktopView}
            activeCategory={props.activeCategory}
          />
        );
      })}
    </S.TeamContainer>
  );
};

export default React.memo(Team);
