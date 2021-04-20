import Team from './Team/Team';
import useViewport from '../UseViewport';
import './TeamSection.css';
import '../../App.css'
import { executiveTeam, projectManagers } from './TeamInformation';
import Divider from "components/Divider";
import { Link } from "react-router-dom";

const TeamSection = () => {

    const { width } = useViewport(); // get screen width
    const breakpoint = 750; // set breakpoint

    // set headers and defaultView flag according to screen width
    let headers = [];
    let defaultView = true;
    if (width > breakpoint)
        headers = ["chonkyHeading", "thiccSubheading"];
    else {
        headers = ["thiccSubheading", "babyHeading"];
        defaultView = false;
    }

    return (
        <div className="TeamSection" >
            <h1 className={headers[0]}>Our Team</h1>
                <Divider />
                <p className="regularText">
                    Tech Start is only possible thanks to our team of talented, passionate leaders. Interested in joining us? <Link to="/apply">Find out what it takes to apply!</Link>
                </p>
                <h2 className={headers[2]}>Executives</h2>
                <Team teamMembers={executiveTeam} defaultView={defaultView} />

                <h2 className={headers[2]}>Project Managers</h2>
                <Team teamMembers={projectManagers} defaultView={defaultView} />
            </div>
    );
}

export default TeamSection;
