import joel_jpg from "./Images/Joel_Happ.jpeg";
import naureen_jpg from "./Images/Naureen_Othi.jpg";
import fedor_jpg from "./Images/Fedor_Prokopchuk.jpg";
//import member_1 from './Images/Valeriya_Volkova.png'
//import member_2 from './Images/Arpith_Indukuri.jpg'
import luke_jpg from "./Images/Luke_Hollinda.jpg";
import amanda_jpg from "./Images/Amanda_Nguyen.jpg";
import tyler_jpg from "./Images/Tyler_Chan.jpg";
import sareen_jpg from "./Images/Sareen_Singh.jpg";
import nurgul_jpg from "./Images/Nurgul_Akhshatayeva.jpg";
import godwin_jpg from "./Images/Markosch_Vacil_Godwin_Saure.jpg";
import terry_jpg from "./Images/Terry.jpg";
import vidhi_jpg from "./Images/Vidhi_Soni.jpeg";
import mahdi_jpg from "./Images/Mahdi_Varposhti.jpg";
import blank_jpg from "./Images/Blank.jpeg";
import zeyad_jpg from "./Images/Zeyad.jpg";
import vivian_jpg from "./Images/Vivian_Huynh_Headshot_3.jpg";
import niyousha_jpg from "./Images/niyousha.jpg";
import davis_jpg from "./Images/davis.jpg";
import elgiz_jpg from "./Images/elgiz.jpeg";
import ali_jpg from "./Images/ali.jpg";

export type TeamMember = {
  id: number;
  name: string;
  affiliation: string; // Affiliation refers to roles and projects for executives and PMs respectively
  image: string;
  linkedin: string;
  email: string;
};

export var executiveTeam: TeamMember[];
export var projectManagers: TeamMember[];

executiveTeam = [
  {
    id: 0,
    name: "Joel Happ",
    affiliation: "Co-President",
    image: joel_jpg,
    linkedin: "https://www.linkedin.com/in/joel-happ/",
    email: "mailto:joel.happ1@ucalgary.ca",
  },
  {
    id: 1,
    name: "Naureen Othi",
    affiliation: "Co-President",
    image: naureen_jpg,
    linkedin: "https://www.linkedin.com/mwlite/in/naureen-othi",
    email: "mailto:naureen.othi@ucalgary.ca",
  },

  {
    id: 2,
    name: "Fedor Prokopchuk",
    affiliation: "VP Strategy",
    image: fedor_jpg,
    linkedin: "https://www.linkedin.com/in/fedor-prokopchuk-707668a6/",
    email: "mailto:fedor.prokopchuk@ucalgary.ca",
  },
  {
    id: 3,
    name: "Luke Hollinda",
    affiliation: "VP External",
    image: luke_jpg,
    linkedin:
      "https://www.linkedin.com/in/luke-hollinda-89270a183/?originalSubdomain=ca",
    email: "mailto:luke.hollinda1@ucalgary.ca",
  },
  {
    id: 4,
    name: "Amanda Nguyen",
    affiliation: "VP Community",
    image: amanda_jpg,
    linkedin: "https://www.linkedin.com/in/amanda-nguyen-b9146620b/",
    email: "mailto:amanda.nguyen1@ucalgary.ca",
  },
  {
    id: 5,
    name: "Tyler Chan",
    affiliation: "VP Communications",
    image: tyler_jpg,
    linkedin: "https://www.linkedin.com/in/chan-tyler/",
    email: "mailto:tyler.chan@ucalgary.ca",
  },
  {
    id: 6,
    name: "Sareen Singh",
    affiliation: "VP Events",
    image: sareen_jpg,
    linkedin:
      "https://www.linkedin.com/in/sareen-singh-309b55173/?originalSubdomain=ca",
    email: "mailto:sareen.singh@ucalgary.ca",
  },
  {
    id: 7,
    name: "Nurgul Akhshatayeva",
    affiliation: "VP Internal",
    image: nurgul_jpg,
    linkedin: "https://www.linkedin.com/in/nurgul-akhshatayeva-6821b0205/",
    email: "mailto:nurgul.akhshatayeva@ucalgary.ca",
  },
  {
    id: 8,
    name: "Godwin Saure",
    affiliation: "VP Finance",
    image: godwin_jpg,
    linkedin: "https://www.linkedin.com/in/godwin-saure/",
    email: "mailto:markosch.saure@ucalgary.ca",
  },
  {
    id: 9,
    name: "Terry Fu",
    affiliation: "VP Development",
    image: terry_jpg,
    linkedin: "https://www.linkedin.com/in/terryfu33/",
    email: "mailto:terry.fu@ucalgary.ca",
  },
  {
    id: 10,
    name: "Vidhi Soni",
    affiliation: "Jr VP External",
    image: vidhi_jpg,
    linkedin: "https://www.linkedin.com/in/vidhi-soni-5ba193196/",
    email: "mailto:vidhi.soni1@ucalgary.ca",
  },
];

projectManagers = [
  {
    id: 11,
    name: "Mahdi Varposhti",
    affiliation: "NoteAId",
    image: mahdi_jpg,
    linkedin: "https://www.linkedin.com/in/mahdiva/",
    email: "mailto:mahdi.varposhti1@ucalgary.ca",
  },
  /*
  {
    id: 12,
    name: "Zeyad Omran",
    affiliation: "Amigo",
    image: zeyad_jpg,
    linkedin: "https://www.linkedin.com/in/zeyadomran",
    email: "mailto:zeyad.omran@ucalgary.ca",
  },
  */
  {
    id: 13,
    name: "Niyousha Raeesinejad",
    affiliation: "TechStart Website",
    image: niyousha_jpg,
    linkedin: "https://www.linkedin.com/in/niyoushar/",
    email: "mailto:niyousha.raeesinejad@ucalgary.ca",
  },
  {
    id: 14,
    name: "Elgiz Abbasov",
    affiliation: "Aquavolution",
    image: elgiz_jpg,
    linkedin: "https://www.linkedin.com/in/elgizabbasov",
    email: "mailto:elgiz.abbasov1@ucalgary.ca",
  },
  {
    id: 15,
    name: "Vivian Huynh",
    affiliation: "Decision App",
    image: vivian_jpg,
    linkedin: "https://www.linkedin.com/in/vivian-huynh-yyc/",
    email: "mailto:vivian.huynh2@ucalgary.ca",
  },
  {
    id: 16,
    name: "Ali Siddiqi",
    affiliation: "Snowbot",
    image: ali_jpg,
    linkedin: "https://www.linkedin.com/in/ali-siddiqi/",
    email: "mailto:ali.siddiqi@ucalgary.ca",
  },
  //{ id: 18, name: "You?", affiliation: "Apply now at techstartucalgary.com/apply!", image: blank_jpg, linkedin: " ", email: " " },
];
