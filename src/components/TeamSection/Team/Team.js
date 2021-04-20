import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Profile from './Profile/Profile';
import './Team.css';

const Team = props => {

    const [containerState, setContainerState] = useState({
        members: props.teamMembers // array of objects
    });

    /**
     * Finds profile icon with matching id supplied by the parameter and
     * updates its state according to the action supplied by the parameter.
     * 
     * @param {integer} id 
     * @param {string} action 
     */
    const changeState = (id, action) => {
        const iconIndex = containerState.members.findIndex(m => {
            return m.id === id;
        });
        const member = { ...containerState.members[iconIndex] };

        if (action === "toggle hover") {
            let toggledValue = !member.hovered;
            member.hovered = toggledValue;
        } else if (action === "link clicked")
            member.hovered = false;

        const members = [...containerState.members];
        members[iconIndex] = member;
        setContainerState({ members: members });
    }

    /**
     * The following if conditions are for setting the layout of the team section
     * according to the number of members for a default screen width.
     */
    let ContainerClass = "Container"; // default layout of members
    if (containerState.members.length === 4) ContainerClass = "Container-4";
    else if (containerState.members.length === 7) ContainerClass = "Container-7";
    else if (containerState.members.length === 8) ContainerClass = "Container-8";
    else if (containerState.members.length === 10) ContainerClass = "Container-10";

    return (
        props.defaultView === true ?
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

                                toggleHover={() => changeState(member.id, "toggle hover")}
                                hovered={member.hovered}
                                linkClicked={() => changeState(member.id, "link clicked")}
                            />
                        );
                    })
                }
            </div>
            :
            <Carousel className="Carousel">
                {containerState.members.map((member, i) =>
                    <Profile
                        className="Profile"
                        key={i}
                        member={member}
                        class={`Profile-${containerState.members.length}`}
                        col={containerState.members.length}

                        profilePic={member.image}
                        alt={[`member_${i}`]}

                        toggleHover={() => changeState(member.id, "toggle hover")}
                        hovered={member.hovered}
                        linkClicked={() => changeState(member.id, "link clicked")}
                    />)}
            </Carousel>
    );
};

export default Team;