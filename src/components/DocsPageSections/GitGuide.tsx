import React from "react";
import "./TechGuides.css";

function GitGuide(props: any) {
    return <a href={props.link} className="guide">
        <header className="guideName">
            {props.name}
        </header>
        <img src={props.image} alt="" />
        <p className="guideDescription">
            {props.description}
        </p>
    </a>;
}

export default GitGuide;