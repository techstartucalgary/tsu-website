import { Component } from 'react';
import Team from './Team/Team';
import './TeamSection.css';

import member_0 from './Images/Joel_Happ.jpg'
import member_1 from './Images/Valeriya_Volkova.png'
import member_2 from './Images/Arpith_Indukuri.jpg'
import member_3 from './Images/Luke_Hollinda.jpg'
import member_4 from './Images/Amanda_Nguyen.jpg'
import member_5 from './Images/Sareen_Singh.jpg'
import member_6 from './Images/Armeen_Rashidian.jpg'
import member_7 from './Images/Felix_Vaughan.jpg'
import member_8 from './Images/Darryl_Huët.jpg'

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
        "member_8": member_8
    }

    state = {
        members: [
            { id: 0, name: "Joel Happ", role: "President | Project Manager", linkedin: "https://www.linkedin.com", email: "", hovered: false, clicked: false },
            { id: 1, name: "Valeriya Volkova", role: "VP Strategy", linkedin: "https://www.linkedin.com", email: "", hovered: false, clicked: false },
            { id: 2, name: "Arpith Indukuri", role: "VP of BALLING OUT", linkedin: "https://www.linkedin.com", email: "", hovered: false, clicked: false },
            { id: 3, name: "Luke Hollinda", role: "VP External", linkedin: "https://www.linkedin.com", email: "", hovered: false, clicked: false },
            { id: 4, name: "Amanda Nguyen", role: "VP Internal", linkedin: "https://www.linkedin.com", email: "", hovered: false, clicked: false },
            { id: 5, name: "Sareen Singh", role: "VP Events", linkedin: "https://www.linkedin.com", email: "", hovered: false, clicked: false },
            { id: 6, name: "Armeen Rashidian", role: "Project Manager", linkedin: "https://www.linkedin.com", email: "", hovered: false, clicked: false },
            { id: 7, name: "Felix Vaughan", role: "Project Manager", linkedin: "https://www.linkedin.com", email: "", hovered: false, clicked: false },
            { id: 8, name: "Darryl Huët", role: "Project Manager", linkedin: "https://www.linkedin.com", email: "", hovered: false, clicked: false }
        ]
    }

    render() {
        return (
            <div className="TeamSection" >
                <h1>Meet the team!</h1>
                <h2>We're thrilled to build up the tech and entrepreneurship sectors at UCalgary. Check out our main project teams below!</h2>
                <Team
                    teamMembers={this.state.members}
                    profilePics={this.profilePics} />
            </div>
        );
    }
}

export default TeamSection;
