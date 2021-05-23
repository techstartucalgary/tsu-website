import { useState } from 'react';
import './Profile.css';
import { ExecutiveMember, ProjectManager } from './TeamInformation';
import ProfileDescription from './ProfileDescription';
import SocialMedia from '../SocialMedia/SocialMedia';

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Profile = (props: {
    className: string, key: number, member: (ExecutiveMember | ProjectManager),
    class: string, col: number, carouselView: boolean, profilePic: any, alt: string
}) => {

    const [containerState, setContainerState] = useState({
        hovered: false
    });

    const toggleHoveredState = () => {
        const toggledHoveredState = !containerState.hovered;
        setContainerState({ hovered: toggledHoveredState });
    }

    const ProfileClasses = ["ProfileDiv"];
    ProfileClasses.push(props.class);

    const LinkSectionClasses = ["LinksSection"];
    if (containerState.hovered) LinkSectionClasses.push("LinkSection--Hover");
    if (props.col < 7) LinkSectionClasses.push("LinkSection--Translate--Small");
    if (props.carouselView) LinkSectionClasses.push("LinkSection--CarouselView");

    const preventDragHandler = (e: any) => e.preventDefault();

    return (
        <div className={ProfileClasses.join(' ')} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="3000">
            <div className="ProfileIconDiv" onMouseEnter={toggleHoveredState} onMouseLeave={toggleHoveredState}>

                <img
                    className="ProfileIcon"
                    src={props.profilePic}
                    key={props.key}
                    alt={props.alt}
                    onDragStart={preventDragHandler} />


                {!props.carouselView &&
                    <div className={LinkSectionClasses.join(' ')} >
                        {props.member.linkedin.trim() !== "" &&
                            <SocialMedia
                                className="Profile-SocialMedia"
                                icon={faLinkedin}
                                link={props.member.linkedin} />
                        }
                        <SocialMedia
                            className="Profile-SocialMedia"
                            icon={faEnvelope}
                            link={props.member.email} />
                    </div>
                }
            </div>
            <ProfileDescription member={props.member} />
            {props.carouselView &&
                <div className={LinkSectionClasses.join(' ')} >
                    {props.member.linkedin.trim() !== "" &&
                        <SocialMedia
                            className="Profile-SocialMedia"
                            noHoverColor={true}
                            icon={faLinkedin}
                            link={props.member.linkedin} />
                    }
                    <SocialMedia
                        className="Profile-SocialMedia"
                        noHoverColor={true}
                        icon={faEnvelope}
                        link={props.member.email} />
                </div>
            }
        </div>
    );
};

export default Profile;