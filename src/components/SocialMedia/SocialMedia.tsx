import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { SocialMediaIcon } from "./SocialMedia.styles";
import { SocialMediaColor } from "../../utility/SharedStyles";

interface SocialMediaProps {
  color: SocialMediaColor;
  link: string;
  icon: IconDefinition;
  newTab?: boolean;
}

const SocialMedia = (props: SocialMediaProps) => {
  return (
    props.link === " " ? 
      <SocialMediaIcon color={props.color}>
        <FontAwesomeIcon icon={props.icon} size="3x" />
      </SocialMediaIcon>
      :
      <SocialMediaIcon 
        color={props.color} 
        href={props.link}
        target={props.newTab ? "_blank" : undefined}
        rel={props.newTab ? "noopener noreferrer" : undefined}
      >
        <FontAwesomeIcon icon={props.icon} size="3x" />
      </SocialMediaIcon>
  );
};

export default SocialMedia;
