import { useState } from 'react';
import Profile from './Profile/Profile';
import './Team.css';

const Team = props => {

    const [containerState, setContainerState] = useState({
        members: props.teamMembers // array of objects
    });

    /*
    const toggleIcon = id => {
        const iconIndex = containerState.members.findIndex(m => {
            return m.id === id;
        }); // executes function on every element and returns index
        const member = { ...containerState.members[iconIndex] }; // distribute properties of object at array index
        const isClicked = member.clicked;
        member.clicked = !isClicked; // update property of object
        const members = [...containerState.members]; // copy old array of objects
        members[iconIndex] = member; // update object in array
        setContainerState({ members: members }); // update array in state
    }
    */

    const hoverIcon = id => {
        const iconIndex = containerState.members.findIndex(m => {
            return m.id === id;
        });
        const member = { ...containerState.members[iconIndex] };
        member.hovered = true;
        const members = [...containerState.members];
        members[iconIndex] = member;
        setContainerState({ members: members });
    }

    const leaveIcon = id => {
        const iconIndex = containerState.members.findIndex(m => {
            return m.id === id;
        });
        const member = { ...containerState.members[iconIndex] };
        if (!(member.hovered && member.clicked)) member.hovered = false;
        const members = [...containerState.members];
        members[iconIndex] = member;
        setContainerState({ members: members });
    }

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

    let ContainerClass = "Container";
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

                            profilePic={props.profilePics[`member_${member.id}`]}
                            alt={[`member_${i}`]}

                            hover={() => hoverIcon(member.id)}
                            hovered={member.hovered}
                            leave={() => leaveIcon(member.id)}

                            linkClicked={() => linkClicked(member.id)}
                        />
                    );
                })
            }
        </div>
    );
};

export default Team;