import member_0 from './Images/Joel_Happ.jpeg'
import member_1 from './Images/Naureen_Othi.jpg'
import member_2 from './Images/Fedor_Prokopchuk.jpg'
//import member_1 from './Images/Valeriya_Volkova.png'
//import member_2 from './Images/Arpith_Indukuri.jpg'
import member_3 from './Images/Luke_Hollinda.jpg'
import member_4 from './Images/Amanda_Nguyen.jpg'
import member_5 from './Images/Tyler_Chan.jpg'
import member_6 from './Images/Sareen_Singh.jpg'
import member_7 from './Images/Nurgul_Akhshatayeva.jpg'
import member_8 from './Images/Markosch_Vacil_Godwin_Saure.jpg'
import member_9 from './Images/Blank.jpg'
import member_10 from './Images/Vidhi_Soni.jpeg'
//import member_7 from './Images/Armeen_Rashidian.jpg'
//import member_8 from './Images/Felix_Vaughan.jpg'
//import member_9 from './Images/Darryl_Huët.jpg'

export type ExecutiveMember = { id: number, name: string, role: string, image: any, linkedin: string, email: string };
export type ProjectManager = { id: number, name: string, project: string, image: any, linkedin: string, email: string };

export var executiveTeam: ExecutiveMember[];
export var projectManagers: ProjectManager[];

executiveTeam = [
    { id: 0, name: "Joel Happ", role: "Co-President", image: member_0, linkedin: "https://www.linkedin.com/in/joel-happ/", email: "mailto:joel.happ1@ucalgary.ca" },
    { id: 1, name: "Naureen Othi", role: "Co-President", image: member_1, linkedin: "https://www.linkedin.com/mwlite/in/naureen-othi", email: "mailto:naureen.othi@ucalgary.ca" },
    
    { id: 2, name: "Fedor Prokopchuk", role: "VP Strategy", image: member_2, linkedin: "https://www.linkedin.com/in/fedor-prokopchuk-707668a6/", email: "mailto:fedor.prokopchuk@ucalgary.ca" },
    { id: 3, name: "Luke Hollinda", role: "VP External", image: member_3, linkedin: "https://www.linkedin.com/in/luke-hollinda-89270a183/?originalSubdomain=ca", email: "mailto:luke.hollinda1@ucalgary.ca" },
    { id: 4, name: "Amanda Nguyen", role: "VP Community", image: member_4, linkedin: "https://www.linkedin.com/in/amanda-nguyen-b9146620b/", email: "mailto:amanda.nguyen1@ucalgary.ca" },
    { id: 5, name: "Tyler Chan", role: "VP Communications", image: member_5, linkedin: "https://www.linkedin.com/in/chan-tyler/", email: "mailto:tyler.chan@ucalgary.ca" },
    { id: 6, name: "Sareen Singh", role: "VP Events", image: member_6, linkedin: "https://www.linkedin.com/in/sareen-singh-309b55173/?originalSubdomain=ca", email: "mailto:sareen.singh@ucalgary.ca" },
    { id: 7, name: "Nurgul Akhshatayeva", role: "VP Internal", image: member_7, linkedin: "https://www.linkedin.com/in/nurgul-akhshatayeva-6821b0205/", email: "mailto:nurgul.akhshatayeva@ucalgary.ca" },
    { id: 8, name: "Markosch Vacil Godwin Saure", role: "VP Finance", image: member_8, linkedin: "https://www.linkedin.com/in/godwin-saure/", email: "mailto:markosch.saure@ucalgary.ca" },
    { id: 9, name: "Terry Fu", role: "VP Development", image: member_9, linkedin: "https://www.linkedin.com/in/terryfu33/", email: "mailto:terry.fu@ucalgary.ca" },
    { id: 10, name: "Vidhi Soni", role: "Jr VP External", image: member_10, linkedin: "https://www.linkedin.com/in/vidhi-soni-5ba193196/", email: "mailto:vidhi.soni1@ucalgary.ca" },
    
];

projectManagers = [
  { id: 7, name: "Daniel Rashidian", project: "Resume Tracker", image: member_7, linkedin: "https://www.linkedin.com/in/armeen-rashidian-b12080195/", email: "mailto:armeenrn@gmail.com" },
  { id: 9, name: "Darryl Huët", project: "Supply Me", image: member_9, linkedin: "https://www.linkedin.com/in/darrylhuet/", email: "mailto:darryl.huet1@ucalgary.ca" },
    { id: 8, name: "Felix Vaughan", project: "Social Media Hub", image: member_8, linkedin: "", email: "mailto:ezamabusiness@gmail.com" },
  { id: 0, name: "Joel Happ", project: "Tech Start Website", image: member_0, linkedin: "https://www.linkedin.com/in/joel-happ/", email: "mailto:joel.happ1@ucalgary.ca" },
];