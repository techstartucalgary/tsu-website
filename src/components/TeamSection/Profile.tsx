import React from "react";
import * as S from "./Profile.styles";
import { TeamMember } from "./TeamInformation";
import ProfileDescription from "./ProfileDescription";
import SocialMedia from "components/SocialMedia/SocialMedia";
import { SocialMediaColor } from "../../utility/SharedStyles";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FounderInfo } from "../TeamFounder/FounderInformation";
import FounderProfileDescription from "../TeamFounder/FounderProfileDescription";

//common props for both team and founder profile
type CommonProfileProps = {
  key: number;
  mobileView: boolean;
  profilePic: string;
  alt: string;
};

// props for team profile
type ProfileProps = CommonProfileProps & {
  member: TeamMember;
  isExec: boolean;
};

// props for founder profile
type FounderProfileProps = CommonProfileProps & {
  member: FounderInfo;
};

// handle whether to render team or founder profile
const Profile = (props: ProfileProps | FounderProfileProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const preventDragHandler = (e: any) => e.preventDefault();

  //  type assertion to tell TypeScript that isExec exists for ProfileProps
  const isExecForProfile = (props as ProfileProps).isExec;

  //type assertion to tell TypeScript that description exists for FounderProfileProps
  const descriptionForFounder = (props as FounderProfileProps).member.description;

  return (
    <S.MainProfileContainer
      data-aos={!props.mobileView && "zoom-in"}
      data-aos-duration={!props.mobileView && "1000"}
    // mobileView={props.mobileView}
    >
      <S.ProfileIconDiv>
        <img
          src={props.profilePic}
          key={props.key}
          alt={props.alt}
          onDragStart={preventDragHandler}
        />
      </S.ProfileIconDiv>

      <S.LinksSection

        backgroundColor={
          isExecForProfile !== undefined
            ? isExecForProfile
              ? SocialMediaColor.ToggleBlue
              : SocialMediaColor.ToggleGreen
            : SocialMediaColor.ToggleGreen
        }
      >
        <SocialMedia
          color={SocialMediaColor.White}
          icon={faLinkedinIn}
          link={props.member.linkedin}
        />
      </S.LinksSection>

      {/*If description exist, then use FounderProfileDescription */}
      {descriptionForFounder ? (
        <FounderProfileDescription
          name={props.member.name}
          affiliation={props.member.affiliation}
          description={descriptionForFounder}
        />
      ) : (
        <ProfileDescription
          name={props.member.name}
          affiliation={props.member.affiliation}
        />
      )}
    </S.MainProfileContainer>
  );
};

export default React.memo(Profile);
