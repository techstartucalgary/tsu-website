import { useState } from 'react';
import Profile from './Profile/Profile';
import './Team.css';

const Team = props => {

    const [containerState, setContainerState] = useState({
        members: props.teamMembers // array of objects
    });

    /**
     * Finds profile icon with matching id supplied by the parameter and
     * toggles its hovered element. Then updates state.
     * 
     * @param {integer} id 
     */
    const toggleHoverIcon = id => {
        const iconIndex = containerState.members.findIndex(m => {
            return m.id === id;
        });
        const member = { ...containerState.members[iconIndex] };
        let toggledValue = !member.hovered;
        member.hovered = toggledValue;
        const members = [...containerState.members];
        members[iconIndex] = member;
        setContainerState({ members: members });
    }

    /**
     * Finds profile icon with matching id supplied by the parameter and
     * sets its hoverAndClick element to false. Then updates state.
     * 
     * @param {integer} id 
     */
    const linkClicked = id => {
        const iconIndex = containerState.members.findIndex(m => {
            return m.id === id;
        });
        const member = { ...containerState.members[iconIndex] };
        member.hoverAndClick = false;
        const members = [...containerState.members];
        members[iconIndex] = member;
        setContainerState({ members: members });
    }

    /**
     * The following if conditions are for setting the layout of the team section
     * according to the number of members.
     */
    let ContainerClass = "Container"; // default layout of members
    if (containerState.members.length === 4) ContainerClass = "Container-4";
    else if (containerState.members.length === 7) ContainerClass = "Container-7";
    else if (containerState.members.length === 8) ContainerClass = "Container-8";
    else if (containerState.members.length === 10) ContainerClass = "Container-10";

    return (
        <div className={ContainerClass}>
            {
                containerState.members.map((member, i) => {
                    return (
                        <Profile
                            key={i}
                            member={member}
                            class={`Profile-${containerState.members.length}`}
                            col={containerState.members.length}

                            profilePic={member.image}
                            alt={[`member_${i}`]}

                            toggleHover={() => toggleHoverIcon(member.id)}
                            hovered={member.hovered}

                            linkClicked={() => linkClicked(member.id)}
                        />
                    );
                })
            }
        </div>
    );
};

export default Team;