import React from "react";
import Profile from "./Profile";
import * as S from "./Team.styles";
import "./Team.styles.ts";
import { type TeamMember, executiveTeam, projectManagers, alumniTeam } from "./TeamInformation";

type TeamProps = {
  teamMembers: TeamMember[];
  desktopView: boolean;
  activeCategory: "executives" | "projectManagers" | "alumni";
};

const getBaseLength = (category: "executives" | "projectManagers" | "alumni") => {
  switch (category) {
    case "executives":
      return executiveTeam.length;
    case "projectManagers":
      return projectManagers.length;
    case "alumni":
      return alumniTeam.length;
    default:
      return 0;
  }
};

const Team = (props: TeamProps) => {
  return (
    <S.TeamContainer mobileView={!props.desktopView}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {props.teamMembers.map((member: TeamMember) => {
        return (
          <Profile
            key={member.id + getBaseLength(props.activeCategory)}
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
