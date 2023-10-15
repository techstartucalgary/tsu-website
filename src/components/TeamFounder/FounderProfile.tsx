import React from "react";
import * as S from "./FounderProfile.styles";
// import { TeamMember } from "./TeamInformation";
import { FounderInfo } from "./FounderInformation";

import FounderProfileDescription from "./FounderProfileDescription";
import SocialMedia from "components/SocialMedia/SocialMedia";
import { SocialMediaColor } from "../../utility/SharedStyles";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

type ProfileProps = {
  key: number;
  member: FounderInfo;
  mobileView: boolean;
  profilePic: string;
  alt: string;
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
        backgroundColor={ SocialMediaColor.ToggleGreen}
      >
        <SocialMedia
          color={SocialMediaColor.White}
          icon={faLinkedinIn}
          link={props.member.linkedin}
        />
      </S.LinksSection>
      <FounderProfileDescription
        name={props.member.name}
        affiliation={props.member.affiliation}
        description={props.member.description}
      />
    </S.ProfileDiv>
  );
};

export default React.memo(Profile);
