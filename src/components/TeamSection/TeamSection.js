import Team from './Team/Team';
import TeamCarousel from './Team/TeamCarousel';
import useViewport from '../UseViewport';
import './TeamSection.css';
import '../../App.css'

import member_0 from './Images/Joel_Happ.jfif'
import member_1 from './Images/Valeriya_Volkova.png'
import member_2 from './Images/Arpith_Indukuri.jpg'
import member_3 from './Images/Luke_Hollinda.jpg'
import member_4 from './Images/Amanda_Nguyen.jpg'
import member_5 from './Images/Tyler_Chan.jpg'
import member_6 from './Images/Sareen_Singh.jpg'
import member_7 from './Images/Armeen_Rashidian.jpg'
import member_8 from './Images/Felix_Vaughan.jpg'
import member_9 from './Images/Darryl_Huët.jpg'

const TeamSection = () => {

    const profilePics = {
        "member_0": member_0,
        "member_1": member_1,
        "member_2": member_2,
        "member_3": member_3,
        "member_4": member_4,
        "member_5": member_5,
        "member_6": member_6,
        "member_7": member_7,
        "member_8": member_8,
        "member_9": member_9
    }

    const teams = {
        executiveTeam: [
            { id: 0, name: "Joel Happ", role: "President | Project Manager", linkedin: "https://www.linkedin.com/in/joel-happ/", email: "mailto:joel.happ1@ucalgary.ca", hovered: false, clicked: false },
            { id: 1, name: "Valeriya Volkova", role: "VP Strategy", linkedin: "https://www.linkedin.com/in/valeriyavolkova/?originalSubdomain=ca", email: "mailto:valeriya.volkova@ucalgary.ca", hovered: false, clicked: false },
            { id: 2, name: "Daniel Indukuri", role: "VP of BALLING OUT", linkedin: "https://www.linkedin.com/in/daniel-indukuri-99776b204/?originalSubdomain=ca", email: "mailto:arpith.indukuri@ucalgary.ca", hovered: false, clicked: false },
            { id: 3, name: "Luke Hollinda", role: "VP External", linkedin: "https://www.linkedin.com/in/luke-hollinda-89270a183/?originalSubdomain=ca", email: "mailto:luke.hollinda1@ucalgary.ca", hovered: false, clicked: false },
            { id: 4, name: "Amanda Nguyen", role: "VP Internal", linkedin: "", email: "mailto:amanda.nguyen1@ucalgary.ca", hovered: false, clicked: false },
            { id: 5, name: "Tyler Chan", role: "VP Communications", linkedin: "https://www.linkedin.com/in/chan-tyler/", email: "mailto:tyler.chan@ucalgary.ca", hovered: false, clicked: false },
            { id: 6, name: "Sareen Singh", role: "VP Events", linkedin: "https://www.linkedin.com/in/sareen-singh-309b55173/?originalSubdomain=ca", email: "mailto:sareen.singh@ucalgary.ca", hovered: false, clicked: false }
        ],

        projectManagers: [
            { id: 0, name: "Joel Happ", project: "Tech Start Website", linkedin: "https://www.linkedin.com/in/joel-happ/", email: "mailto:joel.happ1@ucalgary.ca", hovered: false, clicked: false },
            { id: 7, name: "Armeen Rashidian", project: "Resume Tracker", linkedin: "https://www.linkedin.com/in/armeen-rashidian-b12080195/", email: "mailto:armeenrn@gmail.com", hovered: false, clicked: false },
            { id: 8, name: "Felix Vaughan", project: "Social Media Hub", linkedin: "", email: "mailto:ezamabusiness@gmail.com", hovered: false, clicked: false },
            { id: 9, name: "Darryl Huët", project: "Supply Me", linkedin: "", email: "mailto:darryl.huet1@ucalgary.ca", hovered: false, clicked: false }
        ]
    }

    const { width } = useViewport();
    console.log(width);
    const breakpoint = 750;

    return (
        width > breakpoint ?
            <div className="TeamSection" >
                <h1 className="chonkyHeading">Meet the team!</h1>
                <h2 className="thiccSubheading">We're thrilled to build up the tech and entrepreneurship sectors at UCalgary. Check out our executive team below!</h2>
                <Team
                    teamMembers={teams.executiveTeam}
                    profilePics={profilePics} />

                <h2 className="thiccSubheading">Check out our project managers below!</h2>
                <Team
                    teamMembers={teams.projectManagers}
                    profilePics={profilePics} />
            </div>

            :

            <div className="TeamSection" >
                <h1 className="thiccSubheading">Meet the team!</h1>
                <h2 className="babyHeading">We're thrilled to build up the tech and entrepreneurship sectors at UCalgary. Check out our executive team below!</h2>
                <TeamCarousel
                    teamMembers={teams.executiveTeam}
                    profilePics={profilePics} />

                <h2 className="babyHeading">Check out our project managers below!</h2>
                <TeamCarousel
                    teamMembers={teams.projectManagers}
                    profilePics={profilePics} />

            </div>
    );

}

export default TeamSection;
