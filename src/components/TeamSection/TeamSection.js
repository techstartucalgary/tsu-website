import Team from './Team/Team';
import useViewport from '../UseViewport';
import './TeamSection.css';
import '../../App.css'
import { executiveTeam, projectManagers } from './TeamInformation';

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
            <h1 className={headers[0]}>Meet the team!</h1>

            <h2 className={headers[1]}>We're thrilled to build up the tech and entrepreneurship sectors at UCalgary. Check out our executive team below!</h2>
            <Team teamMembers={executiveTeam} defaultView={defaultView} />

            <h2 className={headers[1]}>Check out our project managers below!</h2>
            <Team teamMembers={projectManagers} defaultView={defaultView} />
        </div>
    );
}

export default TeamSection;
