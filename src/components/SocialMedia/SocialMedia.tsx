import "./SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export enum SocialMediaColor {
  Green,
  Gradient,
  Black,
}

interface SocialMediaProps {
  color: SocialMediaColor;
  link: string;
  icon: any;
}

const SocialMedia = (props: SocialMediaProps) => {
  const socialMediaClasses = ["socialMediaIcon"];
  switch (props.color) {
    case SocialMediaColor.Green:
      socialMediaClasses.push("socialMediaIcon--green");
      break;
    case SocialMediaColor.Gradient:
      socialMediaClasses.push("socialMediaIcon--gradient");
      break;
    case SocialMediaColor.Black:
      break;
    default:
      break;
  }

  return (
    <a href={props.link} className={socialMediaClasses.join(" ")}>
      <FontAwesomeIcon icon={props.icon} size="3x" />
    </a>
  );
};

export default SocialMedia;
