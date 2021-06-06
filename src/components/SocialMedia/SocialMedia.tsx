import './SocialMedia.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export enum SocialMediaColor {
    Green,
    Gradient,
    Black
}

interface SocialMediaProps {
    color: SocialMediaColor,
    link: string,
    icon: any,
}


const SocialMedia = (props: SocialMediaProps) => {
    const socialMediaClasses = ["socialMediaIcon"];
    // if (props.footer) SocialMediaClasses.push("SocialMediaIcon-FooterColor");
    // else SocialMediaClasses.push("SocialMediaIcon-DefaultColor");
    // if (props.noHoverColor) SocialMediaClasses.push("SocialMediaIcon--NoHovorColor")
    let additionalIconStyles = {};
    switch (props.color) {
        case (SocialMediaColor.Green):
            socialMediaClasses.push("socialMediaIcon--green");
            break;
        case (SocialMediaColor.Gradient):
            socialMediaClasses.push("socialMediaIcon--gradient");
            additionalIconStyles = {
                // "color": "red",
                // "background": "linear-gradient(45deg, var(--secondary-lime), var(--secondary-blue))",
                // "-webkit-background-clip": "text",
                // "-moz-background-clip": "text",
                // "-webkit-text-fill-color": "transparent",
                // "-moz-text-fill-color": "transparent",
                // "color": "#9c47fc",
                // "display": "block",
                // "background": "-webkit-linear-gradient(#9c47fc, #356ad2)",
                // "-webkit-background-clip": "text",
                // "-webkit-text-fill-color": "transparent",
                // "fill": "url(#customSVGFromIndexDotHTML)"
            };
            break;
        case (SocialMediaColor.Black):
            break;
        default:
            break;
    }

    return (
        <a
            href={props.link}
            className={socialMediaClasses.join(' ')}>
            <FontAwesomeIcon icon={props.icon} size="2x" style={additionalIconStyles} />
        </a>
    );
};

export default SocialMedia;