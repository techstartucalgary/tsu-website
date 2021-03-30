import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Profile from './Profile/Profile';
import './TeamCarousel.css';

const TeamCarousel = props => {

    const [containerState, setContainerState] = useState({
        members: props.teamMembers // array of objects
    });

    return (
        <div className="Carousel">
            <Carousel>
                {containerState.members.map(member => <div key={member.id}>{member.name}</div>)}
            </Carousel>
        </div >
    );
};

export default TeamCarousel;