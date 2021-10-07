import "./Event.css";
import HoverButton from "../../HoverButton/HoverButton";

const Event = (props: any) => {
  const textClasses = ["babyHeading--green", "regularText", "eventText"];

  const preventDragHandler = (e: any) => e.preventDefault();

  const fadeDirection = props.pastEvent ? "fade-left" : "fade-right";

  const linkButtonText = props.event.linkTitleOverride || "Register";

  return (
    <div className="event" data-aos={fadeDirection} data-aos-duration="2000">
      {props.pastEvent ? (
        <img
          className="eventImgLeft"
          src={props.event.image}
          key={props.event.key}
          alt={props.event.title}
          onDragStart={preventDragHandler}
        />
      ) : (
        <img
          className="eventImgRight"
          src={props.event.image}
          key={props.event.key}
          alt={props.event.title}
          onDragStart={preventDragHandler}
        />
      )}

      <div className="eventText">
        <p className="babyHeading babyHeading--green babyHeading--bolder">
          {props.event.title}
        </p>
        <p className={textClasses[1]}>{props.event.description}</p>

        {!props.pastEvent && (
          <div className="datetime_Button_Div">
            <p className={textClasses[1]}>
              {props.event.date} | {props.event.time}
            </p>
            <HoverButton
              darkMode={true}
              text={linkButtonText}
              link={props.event.link}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
