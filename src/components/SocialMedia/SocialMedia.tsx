import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { SocialMediaColor, SocialMediaIcon } from "./SocialMedia.styles";

interface SocialMediaProps {
  color: SocialMediaColor;
  link: string;
  icon: IconDefinition;
}

const SocialMedia = (props: SocialMediaProps) => {
  return (
    <SocialMediaIcon color={props.color} href={props.link}>
      <FontAwesomeIcon icon={props.icon} size="3x" />
    </SocialMediaIcon>
  );
};

export default SocialMedia;
