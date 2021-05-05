import React from "react";
import "./TechGuides.css";
import { lightTheme, darkTheme, GlobalStyles } from 'types/Themes.js'
// Note: all CSS for this file is currently in TechGuides.css


interface guideProps {
    guideName: string,
    link: string,
    image: any,
    description: string
}

/**
 * A component to render a card that shows a guide. Clicking on the guide takes you to a Google Doc. All info for guides is currently in TechGuides.tsx
 * @param props Should follow the interface above, guideProps
 * @returns A Guide React component
 */
function Guide(props: guideProps) {

    return <a href={props.link} className="guide">

        <div className="guide__background">
            <header className="guideName">
                {props.guideName}
            </header>
            <img src={props.image} alt="" />
            <p className="guideDescription">
                {props.description}
            </p>
        </div>
    </a>;
}

export default Guide;