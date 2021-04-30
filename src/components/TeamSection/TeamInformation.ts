import member_0 from './Images/Joel_Happ.jpeg'
import member_1 from './Images/Valeriya_Volkova.png'
import member_2 from './Images/Arpith_Indukuri.jpg'
import member_3 from './Images/Luke_Hollinda.jpg'
import member_4 from './Images/Amanda_Nguyen.jpg'
import member_5 from './Images/Tyler_Chan.jpg'
import member_6 from './Images/Sareen_Singh.jpg'
import member_7 from './Images/Armeen_Rashidian.jpg'
import member_8 from './Images/Felix_Vaughan.jpg'
import member_9 from './Images/Darryl_Huët.jpg'

export type ExecutiveMember = { id: number, name: string, role: string, image: any, linkedin: string, email: string, clicked: boolean };
export type ProjectManager = { id: number, name: string, project: string, image: any, linkedin: string, email: string, clicked: boolean };

export var executiveTeam: ExecutiveMember[];
export var projectManagers: ProjectManager[];

executiveTeam = [
    { id: 0, name: "Joel Happ", role: "President | Project Manager", image: member_0, linkedin: "https://www.linkedin.com/in/joel-happ/", email: "mailto:joel.happ1@ucalgary.ca", clicked: false },
    { id: 1, name: "Valeriya Volkova", role: "VP Strategy", image: member_1, linkedin: "https://www.linkedin.com/in/valeriyavolkova/?originalSubdomain=ca", email: "mailto:valeriya.volkova@ucalgary.ca", clicked: false },
    { id: 2, name: "Daniel Indukuri", role: "VP Finance", image: member_2, linkedin: "https://www.linkedin.com/in/daniel-indukuri-99776b204/?originalSubdomain=ca", email: "mailto:arpith.indukuri@ucalgary.ca", clicked: false },
    { id: 3, name: "Luke Hollinda", role: "VP External", image: member_3, linkedin: "https://www.linkedin.com/in/luke-hollinda-89270a183/?originalSubdomain=ca", email: "mailto:luke.hollinda1@ucalgary.ca", clicked: false },
    { id: 4, name: "Amanda Nguyen", role: "VP Internal", image: member_4, linkedin: "https://www.linkedin.com/in/amanda-nguyen-b9146620b/", email: "mailto:amanda.nguyen1@ucalgary.ca", clicked: false },
    { id: 5, name: "Tyler Chan", role: "VP Communications", image: member_5, linkedin: "https://www.linkedin.com/in/chan-tyler/", email: "mailto:tyler.chan@ucalgary.ca", clicked: false },
    { id: 6, name: "Sareen Singh", role: "VP Events", image: member_6, linkedin: "https://www.linkedin.com/in/sareen-singh-309b55173/?originalSubdomain=ca", email: "mailto:sareen.singh@ucalgary.ca", clicked: false }
];

projectManagers = [
    { id: 0, name: "Joel Happ", project: "Tech Start Website", image: member_0, linkedin: "https://www.linkedin.com/in/joel-happ/", email: "mailto:joel.happ1@ucalgary.ca", clicked: false },
    { id: 7, name: "Daniel Rashidian", project: "Resume Tracker", image: member_7, linkedin: "https://www.linkedin.com/in/armeen-rashidian-b12080195/", email: "mailto:armeenrn@gmail.com", clicked: false },
    { id: 8, name: "Felix Vaughan", project: "Social Media Hub", image: member_8, linkedin: "", email: "mailto:ezamabusiness@gmail.com", clicked: false },
    { id: 9, name: "Darryl Huët", project: "Supply Me", image: member_9, linkedin: "", email: "mailto:darryl.huet1@ucalgary.ca", clicked: false }
];