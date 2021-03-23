import React, { useState } from 'react';
import Profile from './Profile/Profile';
import './Team.css';

const Team = props => {

    const [containerState, setContainerState] = useState({
        members: props.teamMembers // array of objects
    });

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

    return (
        <div className="Container">
            {
                containerState.members.map((member, i) => {
                    return (
                        <Profile
                            key={i}
                            member={member}

                            profilePic={props.profilePics[`member_${i}`]}
                            alt={[`member_${i}`]}

                            hover={() => hoverIcon(member.id)}
                            click={() => toggleIcon(member.id)}
                            leave={() => leaveIcon(member.id)}
                            linkClicked={() => linkClicked(member.id)}
                            hoverAndClick={member.hovered && member.clicked}
                        />
                    );
                })
            }
        </div>
    );
};

export default Team;