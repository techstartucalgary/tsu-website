import React from 'react';
import './ProfileDescription.css';
import SocialMedia from '../../../../SocialMedia/SocialMedia';

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ProfileDescription = props => {

    return (
        <div className="ProfileDescription">
            <div className="Bio">
                <h3>{props.member.name}</h3>
                <h4>{props.member.role}</h4>
            </div>

            <div className="LinksSection">
                <SocialMedia
                    className="Profile-SocialMedia"
                    onClick={props.linkClicked}
                    icon={faLinkedin}
                    link={props.linkedin}
                    email={props.email} />
            </div>
        </div>
    )
};

export default ProfileDescription;