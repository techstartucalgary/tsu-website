import * as S from "./Profile.styles";
import { TeamMember } from "./TeamInformation";
import ProfileDescription from "./ProfileDescription";
import SocialMedia from "components/SocialMedia/SocialMedia";
import { SocialMediaColor } from "components/SocialMedia/SocialMedia.styles";
import { faBlackberry, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

type ProfileProps = {
  key: number;
  member: TeamMember;
  mobileView: boolean;
  profilePic: string;
  alt: string;
};

const Profile = (props: ProfileProps) => {
  const preventDragHandler = (e: any) => e.preventDefault();

  return (
    <S.ProfileDiv
      data-aos={!props.mobileView && "zoom-in"}
      data-aos-duration={!props.mobileView && "1500"}
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

      <S.LinksSection>
        <SocialMedia
          color={SocialMediaColor.Gradient}
          icon={faLinkedinIn}
          link={props.member.linkedin}
        />
      </S.LinksSection>
      <ProfileDescription
        name={props.member.name}
        affiliation={props.member.affiliation}
      />
    </S.ProfileDiv>
  );
};

export default Profile;
