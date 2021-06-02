import './SocialMedia.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = (props: any) => {
    const SocialMediaClasses = ["SocialMediaIcon"];
    if (props.footer) SocialMediaClasses.push("SocialMediaIcon-FooterColor");
    else SocialMediaClasses.push("SocialMediaIcon-DefaultColor");
    if (props.noHoverColor) SocialMediaClasses.push("SocialMediaIcon--NoHovorColor")

    return (
        <a
            onClick={props.linkClicked}
            href={props.link}
            className={SocialMediaClasses.join(' ')}>
            <FontAwesomeIcon icon={props.icon} size="3x" />
        </a>
    );
};

export default SocialMedia;