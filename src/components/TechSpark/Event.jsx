import React from "react";
import "./Event.css"

function Event(props){

    return (
        <div className = "styling">
            <a href = {props.link}>
                <img src = {props.img} />
                <h3 className = "alignment" id ="title">{props.name}</h3>
            </a>
            
            
            <h5 className = "alignment">{props.date}</h5>
            <p className = "alignment">{props.description}</p>
        </div>
    );
}

export default Event;