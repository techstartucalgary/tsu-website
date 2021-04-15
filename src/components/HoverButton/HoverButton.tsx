import './HoverButton.css'
import '../../App.css';

// TODO: CREATE LIGHT AND DARK MODE FOR BUTTON
const HoverButton = (props: any) => {
    const HoverButtonClasses = ["regularText"];

    if (props.darkMode === true) HoverButtonClasses.push("HoverButton--DarkMode");
    else HoverButtonClasses.push("HoverButton");

    return <div className="HoverButtonDiv">
        {<a href={props.link} className={HoverButtonClasses.join(' ')}>{props.text}</a>}
    </div>
};

export default HoverButton;