import Team from './Team/Team';
import TeamCarousel from './Team/TeamCarousel';
import useViewport from '../UseViewport';
import './TeamSection.css';
import '../../App.css'
import { executiveTeam, projectManagers } from './TeamInformation';

const TeamSection = () => {

    const { width } = useViewport();
    console.log(width);
    const breakpoint = 750;

    return (
        width > breakpoint ?
            <div className="TeamSection" >
                <h1 className="chonkyHeading">Meet the team!</h1>
                <h2 className="thiccSubheading">We're thrilled to build up the tech and entrepreneurship sectors at UCalgary. Check out our executive team below!</h2>
                <Team teamMembers={executiveTeam} />

                <h2 className="thiccSubheading">Check out our project managers below!</h2>
                <Team teamMembers={projectManagers} />
            </div>

            :

            <div className="TeamSection" >
                <h1 className="thiccSubheading">Meet the team!</h1>
                <h2 className="babyHeading">We're thrilled to build up the tech and entrepreneurship sectors at UCalgary. Check out our executive team below!</h2>
                <TeamCarousel teamMembers={executiveTeam} />

                <h2 className="babyHeading">Check out our project managers below!</h2>
                <TeamCarousel teamMembers={projectManagers} />
            </div>
    );

}

export default TeamSection;
