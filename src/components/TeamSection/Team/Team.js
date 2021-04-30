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
     * toggles its clicked state.
     * 
     * @param {integer} id 
     */
    const toggleClick = (id) => {
        const iconIndex = containerState.members.findIndex(m => {
            return m.id === id;
        });

        const member = { ...containerState.members[iconIndex] };
        let toggledValue = !member.clicked;
        member.clicked = toggledValue;

        const members = [...containerState.members];
        members[iconIndex] = member;
        setContainerState({ members: members });
    }

    /**
     * The following if conditions are for setting the layout of the team section
     * according to the number of members for a default screen width.
     */
    let containerClasses = ["Container"]; // default layout of members
    if (containerState.members.length === 4) containerClasses.push("Container--size4");
    else if (containerState.members.length === 7) containerClasses.push("Container--size7");
    else if (containerState.members.length === 8) containerClasses.push("Container--size8");
    else if (containerState.members.length === 10) containerClasses.push("Container--size10");

    return (
        props.defaultView === true ?
            <div className={containerClasses.join(' ')}>
                {
                    containerState.members.map((member, i) => {
                        return (
                            <Profile
                                key={i}
                                member={member}
                                class={`Profile--${containerState.members.length}`}
                                col={containerState.members.length}

                                profilePic={member.image}
                                alt={[`member_${i}`]}

                                toggleClick={() => toggleClick(member.id)}
                                clicked={member.clicked}
                                linkClicked={() => toggleClick(member.id)}
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

                        toggleClick={() => toggleClick(member.id)}
                        clicked={member.clicked}
                        linkClicked={() => toggleClick(member.id)}
                    />)}
            </Carousel>
    );
};

export default Team;