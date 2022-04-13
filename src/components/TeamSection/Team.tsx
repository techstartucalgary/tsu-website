import { SocialMediaColor } from "components/SocialMedia/SocialMedia.styles";
import { useState } from "react";

import Profile from "./Profile";
import * as S from "./Team.styles";
import "./Team.styles.ts";
import { TeamMember } from "./TeamInformation";
import TeamSection from "./TeamSection";
import { ToggleButton } from "./TeamSection.styles";

type TeamProps = {
  teamMembers: TeamMember[];
  desktopView: boolean;
};
const Team = (props: TeamProps) => {
  return (
    <S.TeamContainer mobileView={!props.desktopView}>
      {props.teamMembers.map((member: any) => {
        return (
          <Profile
            key={member.id}
            member={member}
            profilePic={member.image}
            alt={member.image}
            mobileView={!props.desktopView}
          />
        );
      })}
    </S.TeamContainer>
  );
};

export default Team;
