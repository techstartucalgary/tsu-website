import React from "react";
import Profile from "./Profile";
import * as S from "./Team.styles";
import "./Team.styles.ts";
import { type TeamMember, executiveTeam, projectManagers, alumniTeam } from "./TeamInformation";

export type TeamCategory = "executives" | "projectManagers" | "alumni";

type TeamProps = {
  teamMembers: TeamMember[];
  desktopView: boolean;
  activeCategory: TeamCategory;
};

const getEmptyStateContent = (category: TeamCategory) => {
  switch (category) {
    case "executives":
      return {
        message: "Coming Soon",
        subtext: "No executive team members available at this time."
      };
    case "projectManagers":
      return {
        message: "Coming Soon",
        subtext: "No project managers available at this time."
      };
    case "alumni":
      return {
        message: "Coming Soon",
        subtext: "No alumni information available at this time."
      };
    default:
      return {
        message: "Coming Soon",
        subtext: "No team members available at this time."
      };
  }
};

const getBaseLength = (category: TeamCategory) => {
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
  // NEW: Check if the current category is empty
  const isEmpty = props.teamMembers.length === 0;
  // NEW: Get the appropriate message content
  const { message, subtext } = getEmptyStateContent(props.activeCategory);

  return (
    <S.TeamContainer mobileView={!props.desktopView}>
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
      
      {/* NEW: Show empty state if no team members */}
      {isEmpty && (
        <S.EmptyStateContainer>
          <S.EmptyStateText>
            <h3>{message}</h3>
          </S.EmptyStateText>
          <S.EmptyStateSubtext>
            <h4>{subtext}</h4>
          </S.EmptyStateSubtext>
        </S.EmptyStateContainer>
      )}
    </S.TeamContainer>
  );
};

export default React.memo(Team);