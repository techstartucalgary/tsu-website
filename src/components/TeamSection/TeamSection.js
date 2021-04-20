import Team from './Team/Team';
import TeamCarousel from './Team/TeamCarousel';
import useViewport from '../UseViewport';
import './TeamSection.css';
import '../../App.css'
import { executiveTeam, projectManagers } from './TeamInformation';
import Divider from "components/Divider";
import { Link } from "react-router-dom";

const TeamSection = () => {

    const { width } = useViewport();
    console.log(width);
    const breakpoint = 750;

    return (
        width > breakpoint ?
            <div className="TeamSection" >
                <h1 className="chonkyHeading">Our Team</h1>
                <Divider />
                <p className="regularText">
                    Tech Start is only possible thanks to our team of talented, passionate leaders. Interested in joining us? <Link to="/apply">Find out what it takes to apply!</Link>
                </p>
                <h2 className="thiccSubheading">Executives</h2>
                <Team teamMembers={executiveTeam} />

                <h2 className="thiccSubheading">Project Managers</h2>
                <Team teamMembers={projectManagers} />
            </div>

            :

            <div className="TeamSection" >
                <h1 className="chonkyHeading">Our Team</h1>
                <Divider />
                <p className="regularText">
                    Tech Start is only possible thanks to our team of talented, passionate leaders. Interested in joining us? <Link to="/apply">Find out what it takes to apply!</Link>
                </p>
                <h2 className="babyHeading">Executives</h2>
                <TeamCarousel teamMembers={executiveTeam} />

                <h2 className="babyHeading">Project Managers</h2>
                <TeamCarousel teamMembers={projectManagers} />
            </div>
    );

}

export default TeamSection;
