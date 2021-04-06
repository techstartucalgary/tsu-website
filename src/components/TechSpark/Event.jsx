import React from "react";
import "./Event.css"

function Event(props){

    return (
        <div className = "styling">
            <a href = {props.link}>
                <img src = {props.img} />
                <h1 id ="title">{props.name}</h1>
            </a>
            
            
            <h2 className = "alignment">{props.date}</h2>
            <p className = "alignment">{props.description}</p>
        </div>
    );
}

export default Event;