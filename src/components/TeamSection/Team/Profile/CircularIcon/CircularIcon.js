import React from 'react';
import './CircularIcon.css';

const CircularIcon = props => {

    return (
        <img
            className="ProfileIcon"
            src={props.profilePic}
            key={props.key}
            alt={props.alt} />
    );
};

export default CircularIcon;