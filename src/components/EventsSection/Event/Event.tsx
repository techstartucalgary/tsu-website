import "./Event.css";
import HoverButton from "../../HoverButton/HoverButton";

type EventProps = {
  key: number;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  link: string;
  linkTitleOverride?: string;
  pastEvent: boolean;
};

const Event = (props: EventProps) => {
  const textClasses = ["babyHeading--green", "regularText", "eventText"];

  const preventDragHandler = (e: any) => e.preventDefault();

  const fadeDirection = props.pastEvent ? "fade-left" : "fade-right";

  const linkButtonText = props.linkTitleOverride || "Register";

  return (
    <div className="event" data-aos={fadeDirection} data-aos-duration="2000">
      {props.pastEvent ? (
        <img
          className="eventImgLeft"
          src={props.image}
          key={props.key}
          alt={props.title}
          onDragStart={preventDragHandler}
        />
      ) : (
        <img
          className="eventImgRight"
          src={props.image}
          key={props.key}
          alt={props.title}
          onDragStart={preventDragHandler}
        />
      )}

      <div className="eventText">
        <p className="babyHeading babyHeading--green babyHeading--bolder">
          {props.title}
        </p>
        <p className={textClasses[1]}>{props.description}</p>

        {!props.pastEvent && (
          <div className="datetime_Button_Div">
            <p className={textClasses[1]}>
              {props.date} | {props.time}
            </p>
            <HoverButton
              darkMode={true}
              text={linkButtonText}
              link={props.link}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
