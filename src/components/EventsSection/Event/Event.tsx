import './Event.css';
import HoverButton from '../../HoverButton/HoverButton';
import useViewport from '../../UseViewport';

const Event = (props: any) => {

    const textClasses = ["babyHeading--green", "regularText", "eventText"]

    const preventDragHandler = (e: any) => e.preventDefault();

    const { width } = useViewport(); // get screen width
    const breakpoint = 750; // set breakpoint

    return (

        <div className="event">
            {props.pastEvent ?
                <img
                    className="eventImgLeft"
                    src={props.event.image}
                    key={props.event.key}
                    onDragStart={preventDragHandler} />
                :

                <img
                    className="eventImgRight"
                    src={props.event.image}
                    key={props.event.key}
                    onDragStart={preventDragHandler} />

            }

            <div className="eventText">
                <p className={textClasses[0]}>{props.event.title}</p>
                <p className={textClasses[1]}>{props.event.description}</p>

                {!props.pastEvent &&
                    < div className="datetime_Button_Div">
                        <p className={textClasses[1]}>{props.event.date} | {props.event.time}</p>
                        <HoverButton
                            darkMode={true}
                            text="Register"
                            link={props.event.link}
                        />
                    </div>
                }
            </div>
        </div >
    );
};

export default Event;