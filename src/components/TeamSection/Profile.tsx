import * as S from "./Profile.styles";
import { TeamMember } from "./TeamInformation";
import ProfileDescription from "./ProfileDescription";
import SocialMedia from "components/SocialMedia/SocialMedia";
import { SocialMediaColor } from "components/SocialMedia/SocialMedia.styles";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type ProfileProps = {
  className: string;
  key: number;
  member: TeamMember;
  class: string;
  col: number;
  carouselView: boolean;
  profilePic: string;
  alt: string;
};

const Profile = (props: ProfileProps) => {
  const preventDragHandler = (e: any) => e.preventDefault();

  return (
    <S.ProfileDiv
      className={props.class}
      data-aos={!props.carouselView && "zoom-in"}
      data-aos-duration={!props.carouselView && "1500"}
      carouselView={props.carouselView}
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
          icon={faLinkedin}
          link={props.member.linkedin}
        />
        <SocialMedia
          color={SocialMediaColor.Gradient}
          icon={faEnvelope}
          link={props.member.email}
        />
      </S.LinksSection>
      <ProfileDescription
        name={props.member.name}
        affiliation={props.member.affiliation}
        isCarousel={props.carouselView}
      />
    </S.ProfileDiv>
  );
};

export default Profile;
