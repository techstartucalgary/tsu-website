import { upcomingEvents, pastEvents } from './EventInformation';
import Event from './Event/Event';
import './EventsSection.css';
import '../../App.css';

const EventsSection = () => {
    return (
        <div className="eventsSection_container">
            <p className="regularText" style={{ "marginBottom": "10%" }}>
                Every semester, Tech Start UCalgary organizes and hosts a range of events, both online and on campus.
                We cover a wide array of topics, from technical workshops to panel discussions with successful entrepreneurs to interviews with industry leaders.
                If you're interested in the intersection of technology and startups, make sure to follow our social media and sign up for our upcoming events!
                Almost all events are open to the public - no club membership is required!
            </p>

            <div className="upcomingEvents_container" style={{ textAlign: "left" }}>
                {
                    upcomingEvents.map((event, i) => {
                        return (
                            <Event
                                key={i}
                                event={event}
                                pastEvent={false}
                            />
                        );
                    })
                }
            </div>

            <h2 className="thiccSubheading--white" style={{ "marginTop": "10%", "marginBottom": "10%" }}>Check out other events we've hosted in the past:</h2>

            <div className="pastEvents_container" style={{ textAlign: "left" }}>
                {
                    pastEvents.map((event, i) => {
                        return (
                            <Event
                                key={i}
                                event={event}
                                pastEvent={true}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default EventsSection;