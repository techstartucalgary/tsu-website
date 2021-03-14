import React from 'react';
import './ProfileDescription.css';
import SocialMedia from '../../../SocialMedia/SocialMedia';
import FadeIn from '../../../FadeIn';

import {
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";


const ProfileDescription = props => {

    return (
        <FadeIn delay={250} duration={300}>
            <div className="ProfileDescription">
                <p className="Name">{props.member.name}</p>

                <div className="LinksSection">
                    <SocialMedia
                        onClick={props.linkClicked}
                        icon={faLinkedin}
                        link={props.linkedin} />

                </div>
            </div>
        </FadeIn>
    )
};

export default ProfileDescription;