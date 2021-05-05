import './Event.css';
import HoverButton from '../../HoverButton/HoverButton';

const Event = (props: any) => {

    let fontClasses = [];
    fontClasses = ["babyHeading--green", "regularText"]

    const preventDragHandler = (e: any) => e.preventDefault();

    return (
        <div className="event">
            {props.pastEvent &&
                <img
                    className="eventImg"
                    src={props.event.image}
                    key={props.event.key}
                    onDragStart={preventDragHandler} />
            }

            <div className="eventText">
                <p className={fontClasses[0]}>{props.event.title}</p>
                <p className={fontClasses[1]}>{props.event.description}</p>

                {!props.pastEvent &&
                    <div>
                        <p className={fontClasses[1]}>{props.event.date} | {props.event.time}</p>
                        <HoverButton
                            darkMode={true}
                            text="Register"
                            link={props.event.link}
                        />
                    </div>
                }
            </div>

            {!props.pastEvent &&
                <img
                    className="eventImg"
                    src={props.event.image}
                    key={props.event.key}
                    onDragStart={preventDragHandler} />
            }
        </div>
    );
};

export default Event;