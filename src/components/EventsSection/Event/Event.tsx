import './Event.css';
import HoverButton from '../../HoverButton/HoverButton';
import useViewport from '../../UseViewport';

const Event = (props: any) => {

    const fontClasses = ["babyHeading--green", "regularText"]

    const preventDragHandler = (e: any) => e.preventDefault();

    const { width } = useViewport(); // get screen width
    const breakpoint = 750; // set breakpoint

    return (
        <div className="event">
            {(props.pastEvent || width <= breakpoint) &&
                <div className="eventImgDiv">
                    <img
                        className="eventImg"
                        src={props.event.image}
                        key={props.event.key}
                        onDragStart={preventDragHandler} />
                </div>
            }

            <div className="eventText">
                <p className={fontClasses[0]}>{props.event.title}</p>
                <p className={fontClasses[1]}>{props.event.description}</p>

                {!props.pastEvent &&
                    < div className="datetime_Button_Div">
                        <p className={fontClasses[1]}>{props.event.date} | {props.event.time}</p>
                        <HoverButton
                            darkMode={true}
                            text="Register"
                            link={props.event.link}
                        />
                    </div>
                }
            </div>

            {
                !props.pastEvent && width > breakpoint &&
                <div className="eventImgDiv">
                    <img
                        className="eventImg"
                        src={props.event.image}
                        key={props.event.key}
                        onDragStart={preventDragHandler} />
                </div>
            }
        </div >
    );
};

export default Event;