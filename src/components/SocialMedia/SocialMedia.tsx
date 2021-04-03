import React from "react";
import './SocialMedia.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = (props: any) => {
    const SocialMediaClasses = ["SocialMediaIcon"];
    if (props.footer) SocialMediaClasses.push("SocialMediaIcon-FooterColor");
    else SocialMediaClasses.push("SocialMediaIcon-DefaultColor");
    return (
        <a
            onClick={props.linkClicked}
            href={props.link}
            className={SocialMediaClasses.join(' ')}>
            <FontAwesomeIcon icon={props.icon} size="2x" />
        </a>
    );
};

export default SocialMedia;