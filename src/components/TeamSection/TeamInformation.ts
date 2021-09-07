import joel_jpg from './Images/Joel_Happ.jpeg'
import naureen_jpg from './Images/Naureen_Othi.jpg'
import fedor_jpg from './Images/Fedor_Prokopchuk.jpg'
//import member_1 from './Images/Valeriya_Volkova.png'
//import member_2 from './Images/Arpith_Indukuri.jpg'
import luke_jpg from './Images/Luke_Hollinda.jpg'
import amanda_jpg from './Images/Amanda_Nguyen.jpg'
import tyler_jpg from './Images/Tyler_Chan.jpg'
import sareen_jpg from './Images/Sareen_Singh.jpg'
import nurgul_jpg from './Images/Nurgul_Akhshatayeva.jpg'
import godwin_jpg from './Images/Markosch_Vacil_Godwin_Saure.jpg'
import terry_jpg from './Images/Blank.jpg'
import vidhi_jpg from './Images/Vidhi_Soni.jpeg'
import mahdi_jpg from './Images/Mahdi_Varposhti.jpg'
import blank_jpg from './Images/Blank.jpeg'
//import member_7 from './Images/Armeen_Rashidian.jpg'
//import member_8 from './Images/Felix_Vaughan.jpg'
//import member_9 from './Images/Darryl_Huët.jpg'

export type ExecutiveMember = { id: number, name: string, role: string, image: any, linkedin: string, email: string };
export type ProjectManager = { id: number, name: string, project: string, image: any, linkedin: string, email: string };

export var executiveTeam: ExecutiveMember[];
export var projectManagers: ProjectManager[];

executiveTeam = [
    { id: 0, name: "Joel Happ", role: "Co-President", image: joel_jpg, linkedin: "https://www.linkedin.com/in/joel-happ/", email: "mailto:joel.happ1@ucalgary.ca" },
    { id: 1, name: "Naureen Othi", role: "Co-President", image: naureen_jpg, linkedin: "https://www.linkedin.com/mwlite/in/naureen-othi", email: "mailto:naureen.othi@ucalgary.ca" },
    
    { id: 2, name: "Fedor Prokopchuk", role: "VP Strategy", image: fedor_jpg, linkedin: "https://www.linkedin.com/in/fedor-prokopchuk-707668a6/", email: "mailto:fedor.prokopchuk@ucalgary.ca" },
    { id: 3, name: "Luke Hollinda", role: "VP External", image: luke_jpg, linkedin: "https://www.linkedin.com/in/luke-hollinda-89270a183/?originalSubdomain=ca", email: "mailto:luke.hollinda1@ucalgary.ca" },
    { id: 4, name: "Amanda Nguyen", role: "VP Community", image: amanda_jpg, linkedin: "https://www.linkedin.com/in/amanda-nguyen-b9146620b/", email: "mailto:amanda.nguyen1@ucalgary.ca" },
    { id: 5, name: "Tyler Chan", role: "VP Communications", image: tyler_jpg, linkedin: "https://www.linkedin.com/in/chan-tyler/", email: "mailto:tyler.chan@ucalgary.ca" },
    { id: 6, name: "Sareen Singh", role: "VP Events", image: sareen_jpg, linkedin: "https://www.linkedin.com/in/sareen-singh-309b55173/?originalSubdomain=ca", email: "mailto:sareen.singh@ucalgary.ca" },
    { id: 7, name: "Nurgul Akhshatayeva", role: "VP Internal", image: nurgul_jpg, linkedin: "https://www.linkedin.com/in/nurgul-akhshatayeva-6821b0205/", email: "mailto:nurgul.akhshatayeva@ucalgary.ca" },
    { id: 8, name: "Godwin Saure", role: "VP Finance", image: godwin_jpg, linkedin: "https://www.linkedin.com/in/godwin-saure/", email: "mailto:markosch.saure@ucalgary.ca" },
    { id: 9, name: "Terry Fu", role: "VP Development", image: terry_jpg, linkedin: "https://www.linkedin.com/in/terryfu33/", email: "mailto:terry.fu@ucalgary.ca" },
    { id: 10, name: "Vidhi Soni", role: "Jr VP External", image: vidhi_jpg, linkedin: "https://www.linkedin.com/in/vidhi-soni-5ba193196/", email: "mailto:vidhi.soni1@ucalgary.ca" },
    
];

projectManagers = [
  { id: 11, name: "Mahdi Varposhti", project: " ", image: mahdi_jpg, linkedin: "https://www.linkedin.com/in/mahdiva/", email: "mailto:mahdi.varposhti1@ucalgary.ca" },
  { id: 12, name: "You?", project: "Apply now at techstartucalgary.com/apply!", image: blank_jpg, linkedin: " ", email: " " },
  
];