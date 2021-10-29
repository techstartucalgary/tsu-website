import { useState } from "react";
import "./Profile.css";
import { ExecutiveMember, ProjectManager } from "./TeamInformation";
import ProfileDescription from "./ProfileDescription";
import SocialMedia, { SocialMediaColor } from "../SocialMedia/SocialMedia";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Profile = (props: {
  className: string;
  key: number;
  member: ExecutiveMember | ProjectManager;
  class: string;
  col: number;
  carouselView: boolean;
  profilePic: any;
  alt: string;
}) => {
  const [containerState, setContainerState] = useState({
    hovered: false,
  });

  const toggleHoveredState = () => {
    const toggledHoveredState = !containerState.hovered;
    setContainerState({ hovered: toggledHoveredState });
  };

  const profileClasses = ["ProfileDiv"];
  profileClasses.push(props.class);

  const linkSectionClasses = ["LinksSection"];
  // if (containerState.hovered) linkSectionClasses.push("LinkSection--Hover");
  // if (props.col < 7) linkSectionClasses.push("LinkSection--Translate--Small");
  if (props.carouselView) {
    profileClasses.push("profile--carousel");
    linkSectionClasses.push("LinkSection--CarouselView");
  }

  const preventDragHandler = (e: any) => e.preventDefault();

  let animationProps = ["zoom-in", "1500"];
  if (props.carouselView) animationProps = [];

  return (
    <div
      className={profileClasses.join(" ")}
      data-aos={animationProps[0]}
      data-aos-duration={animationProps[1]}
    >
      <div
        className="ProfileIconDiv"
        onMouseEnter={toggleHoveredState}
        onMouseLeave={toggleHoveredState}
      >
        <img
          className="ProfileIcon"
          src={props.profilePic}
          key={props.key}
          alt={props.alt}
          onDragStart={preventDragHandler}
        />

        {/* {!props.carouselView &&
                    <div className={linkSectionClasses.join(' ')} >
                        {props.member.linkedin.trim() !== "" &&
                            <SocialMedia
                                className="Profile-SocialMedia"
                                icon={faLinkedin}
                                link={props.member.linkedin} />
                        }
                        <SocialMedia
                            className="Profile-SocialMedia"
                            icon={faEnvelope}
                            link={props.member.email} />
                    </div>
                } */}
      </div>
      <div className={linkSectionClasses.join(" ")}>
        {props.member.linkedin.trim() !== "" && (
          <SocialMedia
            color={SocialMediaColor.Gradient}
            icon={faLinkedin}
            link={props.member.linkedin}
          />
        )}
        {props.member.email.trim() !== "" && (
          <SocialMedia
            color={SocialMediaColor.Gradient}
            icon={faEnvelope}
            link={props.member.email}
          />
        )}
      </div>
      <ProfileDescription
        member={props.member}
        isCarousel={props.carouselView}
      />
    </div>
  );
};

export default Profile;
