import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Profile from './Profile/Profile';
import './TeamCarousel.css';
import '../../../App.css';

const TeamCarousel = props => {

    const [containerState, setContainerState] = useState({
        members: props.teamMembers // array of objects
    });

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
        if (!(member.hovered && member.clicked)) member.hovered = false
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
                    hover={() => hoverIcon(member.id)}
                    hovered={member.hovered}
                    leave={() => leaveIcon(member.id)}
                    linkClicked={() => linkClicked(member.id)}
                />)}
        </Carousel>

    );
};

export default TeamCarousel;