import React from 'react';
import './ProfileDescription.css';
import SocialMedia from '../../../../SocialMedia/SocialMedia';

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ProfileDescription = props => {

    return (
        <div className="ProfileDescription">
            <div className="Bio">
                <h3>{props.member.name}</h3>
                <h4>{props.member.role}</h4>
            </div>

            <div className="LinksSection">
                {props.member.linkedin.trim() !== "" &&

                    <SocialMedia
                        className="Profile-SocialMedia"
                        onClick={props.linkClicked}
                        icon={faLinkedin}
                        link={props.member.linkedin} />

                }


                <SocialMedia
                    className="Profile-SocialMedia"
                    onClick={props.linkClicked}
                    icon={faEnvelope}
                    link={props.member.email} />
            </div>
        </div>
    )
};

export default ProfileDescription;