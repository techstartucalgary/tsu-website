import "./HoverButton.css";
import "../../App.css";

type HoverButtonProps = {
  darkMode: boolean;
  link: string;
  text: string;
};

const HoverButton = (props: HoverButtonProps) => {
  const HoverButtonClasses = ["regularText"];

  if (props.darkMode === true) HoverButtonClasses.push("HoverButton--DarkMode");
  else HoverButtonClasses.push("HoverButton");

  return (
    <div className="HoverButtonDiv">
      {
        <a
          href={props.link}
          className={HoverButtonClasses.join(" ")}
          target="_blank"
          rel="noreferrer"
        >
          {props.text}
        </a>
      }
    </div>
  );
};

export default HoverButton;
