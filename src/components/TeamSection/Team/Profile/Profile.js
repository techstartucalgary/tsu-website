import './Profile.css';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import SocialMedia from '../../../SocialMedia/SocialMedia';

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Profile = props => {

    const ProfileClasses = ["ProfileDiv"];
    // if (props.hoverAndClick) ProfileClasses.push("ProfileDiv--HoverAndClick");
    ProfileClasses.push(props.class);

    const LinkSectionClasses = ["LinksSection"];
    if (props.hovered) { LinkSectionClasses.push("LinkSection--Hover") };
    if (props.col < 7) { LinkSectionClasses.push("LinkSection--Translate--Small") }

    return (
        <div className={ProfileClasses.join(' ')} >
            <div className="ProfileIconDiv" onMouseEnter={props.hover} onMouseLeave={props.leave} /*onClick={props.click}*/>
                <img
                    className="ProfileIcon"
                    src={props.profilePic}
                    key={props.key}
                    alt={props.alt} />

                <div className={LinkSectionClasses.join(' ')} >
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

            <ProfileDescription
                member={props.member}
                linkClicked={props.linkClicked}
            />
        </div>
    );
};

export default Profile;