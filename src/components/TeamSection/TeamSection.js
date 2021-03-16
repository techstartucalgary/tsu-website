import { Component } from 'react';
import Team from './Team/Team';
import './TeamSection.css';

import member_0 from './Images/Joel_Happ.jpg'
import member_1 from './Images/Valeriya_Volkova.png'
import member_2 from './Images/Arpith_Indukuri.jpg'
import member_3 from './Images/Luke_Hollinda.jpg'
import member_4 from './Images/Amanda_Nguyen.jpg'
import member_5 from './Images/Tyler_Chan.jfif'
import member_6 from './Images/Sareen_Singh.jpg'
import member_7 from './Images/Armeen_Rashidian.jpg'
import member_8 from './Images/Felix_Vaughan.jpg'
import member_9 from './Images/Darryl_Huët.jpg'

class TeamSection extends Component {

    profilePics = {
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

    state = {
        executiveTeam: [
            { id: 0, name: "Joel Happ", role: "President | Project Manager", linkedin: "https://www.linkedin.com/in/joel-happ/", email: "mailto:joel.happ1@ucalgary.ca", hovered: false, clicked: false },
            { id: 1, name: "Valeriya Volkova", role: "VP Strategy", linkedin: "https://www.linkedin.com/in/valeriyavolkova/?originalSubdomain=ca", email: "mailto:valeriya.volkova@ucalgary.ca", hovered: false, clicked: false },
            { id: 2, name: "Daniel Indukuri", role: "VP of BALLING OUT", linkedin: "https://www.linkedin.com/in/daniel-indukuri-99776b204/?originalSubdomain=ca", email: "mailto:arpith.indukuri@ucalgary.ca", hovered: false, clicked: false },
            { id: 3, name: "Luke Hollinda", role: "VP External", linkedin: "https://www.linkedin.com/in/luke-hollinda-89270a183/?originalSubdomain=ca", email: "mailto:luke.hollinda1@ucalgary.ca", hovered: false, clicked: false },
            { id: 4, name: "Amanda Nguyen", role: "VP Internal", linkedin: "", email: "mailto:amanda.nguyen1@ucalgary.ca", hovered: false, clicked: false },
            { id: 5, name: "Tyler Chan", role: "VP Communications", linkedin: "https://www.linkedin.com/in/chan-tyler/", email: "mailto:tyler.chan@ucalgary.ca", hovered: false, clicked: false },
            { id: 6, name: "Sareen Singh", role: "VP Events", linkedin: "https://www.linkedin.com/in/sareen-singh-309b55173/?originalSubdomain=ca", email: "mailto:sareen.singh@ucalgary.ca", hovered: false, clicked: false },
        ],

        projectManagers: [
            { id: 7, name: "Armeen Rashidian", role: "Project Manager", linkedin: "https://www.linkedin.com/in/armeen-rashidian-b12080195/", email: "mailto:armeenrn@gmail.com", hovered: false, clicked: false },
            { id: 8, name: "Felix Vaughan", role: "Project Manager", linkedin: "", email: "mailto:ezamabusiness@gmail.com", hovered: false, clicked: false },
            { id: 9, name: "Darryl Huët", role: "Project Manager", linkedin: "", email: "mailto:darryl.huet1@ucalgary.ca", hovered: false, clicked: false }
        ]
    }

    render() {
        return (
            <div className="TeamSection" >
                <h1>Meet the team!</h1>
                <h2>We're thrilled to build up the tech and entrepreneurship sectors at UCalgary. Check out our executive team below!</h2>
                <Team
                    teamMembers={this.state.executiveTeam}
                    profilePics={this.profilePics} />
            </div>
        );
    }
}

export default TeamSection;
