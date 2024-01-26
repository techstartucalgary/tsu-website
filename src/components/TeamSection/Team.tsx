import React from "react";
import Profile from "./Profile";
import * as S from "./Team.styles";
import "./Team.styles.ts";
import { type TeamMember } from "./TeamInformation";
import { executiveTeam } from "./TeamInformation";

type TeamProps = {
  teamMembers: TeamMember[];
  desktopView: boolean;
  isExec: boolean;
};
const Team = (props: TeamProps) => {
  return (
    <S.TeamContainer mobileView={!props.desktopView}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {props.teamMembers.map((member: TeamMember) => {
        return (
          <Profile
            key={props.isExec ? member.id : member.id + executiveTeam.length}
            member={member}
            profilePic={member.image}
            alt={member.image}
            mobileView={!props.desktopView}
            isExec={props.isExec}
          />
        );
      })}
    </S.TeamContainer>
  );
};

export default React.memo(Team);
