import React from "react";
import * as S from "./Profile.styles";
import { TeamMember } from "./TeamInformation";
import ProfileDescription from "./ProfileDescription";
import SocialMedia from "components/SocialMedia/SocialMedia";
import { SocialMediaColor } from "../../utility/SharedStyles";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// props for team profile
type ProfileProps = {
  key: number;
  mobileView: boolean;
  profilePic: string;
  alt: string;
  member: TeamMember;
  isExec: boolean;
};

const Profile = (props: ProfileProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const preventDragHandler = (e: any) => e.preventDefault();

  return (
    <S.ProfileDiv
      data-aos={!props.mobileView && "zoom-in"}
      data-aos-duration={!props.mobileView && "1000"}
      mobileView={props.mobileView}
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
          props.isExec
            ? SocialMediaColor.ToggleGreen
            : SocialMediaColor.ToggleBlue
        }
      >
        <SocialMedia
          color={SocialMediaColor.White}
          icon={faLinkedinIn}
          link={props.member.linkedin}
          target="_blank"
        />
      </S.LinksSection>

      <ProfileDescription
        name={props.member.name}
        affiliation={props.member.affiliation}
      />
    </S.ProfileDiv>
  );
};

export default React.memo(Profile);
