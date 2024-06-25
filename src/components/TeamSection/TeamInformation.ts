import tyler_jpg from "../../images/team/Tyler_Chan.jpg";
import niyousha_jpg from "../../images/team/Niyousha_Raeesinejad.jpg";
import carol_jpg from "../../images/team/Carol_Wang.jpg";
import rajpreet_jpg from "../../images/team/Rajpreet_Gill.jpg";
import labib_jpg from "../../images/team/Labib_Ahmed.jpg";
import ana_jpg from "../../images/team/Ana_Laura.jpg";
import estefy_jpeg from "../../images/team/Estefy_Caballero.jpg";
import maheen_jpg from "../../images/team/Maheen_Raza.jpg";
import ben_jpg from "../../images/team/Ben_Schmidt.jpg";
import aarsh_jpg from "../../images/team/Aarsh_Shah.jpg";
import hilton_jpg from "../../images/team/Hilton_Luu.jpg";
import wilbur_jpg from "../../images/team/Wilbur_Elbouni.jpg";
import naman_jpg from "../../images/team/Naman_Bhoj.jpg";
import lujaina_jpg from "../../images/team/Lujaina_ Eldelebshany.jpg";
import hamza_jpg from "../../images/team/Hamza_Afzaal.jpg";
import joel_jpg from "../../images/team/Joel_Happ.jpeg";
import rachel_jpg from "../../images/team/Rachel_Renegado.jpg";
import brian_jpg from "../../images/team/Brian_Nguyen.jpg";
import esther_jpg from "../../images/team/Esther_Thompson.jpg";
import ivan_jpg from "../../images/team/Ivan_Imshenetskyy.jpg";
import mehrnaz_jpg from "../../images/team/Mehrnaz_Zafari.jpg";
import parsa_jpg from "../../images/team/Parsa_Kargari.jpg";
import youssef_jpg from "../../images/team/Youssef_Hamed.jpg";

export type TeamMember = {
  id: number;
  name: string;
  affiliation: string; // Affiliation refers to roles and projects for executives and PMs respectively
  image: string;
  linkedin: string;
};

type FounderDescription = {
  description: string;
};

export type FounderInfo = TeamMember & FounderDescription;

export const founder: FounderInfo = {
  id: 1,
  name: "Joel Happ",
  affiliation: "Founder & Chairman",
  description: "During the heart of the pandemic and his undergrad years of software engineering, Joel founded Tech Start UCalgary, envisioning a collaborative hub for students and tech enthusiasts to ideate, create, and grow together outside the classroom. His aim was to foster a vibrant, inclusive community where innovation meets passion, laying the groundwork for tech-driven progress within the University of Calgary!",
  image: joel_jpg,
  linkedin: "https://www.linkedin.com/in/joel-happ/",
};

export const executiveTeam: TeamMember[] = [
  {
    id: 0,
    name: "Rachel Renegado",
    affiliation: "Co-President",
    image: rachel_jpg,
    linkedin: "https://www.linkedin.com/in/rachel-renegado-544409201",
  },
  {
    id: 1,
    name: "Aarsh Shah",
    affiliation: "Co-President",
    image: aarsh_jpg,
    linkedin: "https://www.linkedin.com/in/aarsh-shah-0a84161a9/",
  },
  {
    id: 2,
    name: "Maheen Raza",
    affiliation: "VP Internal",
    image: maheen_jpg,
    linkedin: "https://www.linkedin.com/in/maheen-raza-40b780229/",
  },
  {
    id: 3,
    name: "Labib Afshar Ahmed",
    affiliation: "VP Finance",
    image: labib_jpg,
    linkedin: "https://www.linkedin.com/in/labib-afsar-ahmed/",
  },
  {
    id: 4,
    name: "Ivan Imshenetskyy",
    affiliation: "Co-VP Finance",
    image: ivan_jpg,
    linkedin: "https://www.linkedin.com/in/imivani/",
  },
  {
    id: 5,
    name: "Ana Laura Espinosa Garza",
    affiliation: "VP External",
    image: ana_jpg,
    linkedin: "https://www.linkedin.com/in/ana-laura-espinosa-garza-136a281b0/",
  },
  {
    id: 6,
    name: "Carol Wang",
    affiliation: "VP Community",
    image: carol_jpg,
    linkedin: "https://www.linkedin.com/in/carol-wang3116/",
  },
  {
    id: 7,
    name: "Estefy Caballero",
    affiliation: "VP Communications",
    image: estefy_jpeg,
    linkedin: "https://www.linkedin.com/in/estefy-caballero-864aab25a",
  },
  {
    id: 8,
    name: "Esther Thompson",
    affiliation: "Jr VP Communications",
    image: esther_jpg,
    linkedin: "https://www.linkedin.com/in/esther-thompson-2436911b4/",
  },
  {
    id: 9,
    name: "Ben Schmidt",
    affiliation: "Co-VP Development",
    image: ben_jpg,
    linkedin: "https://www.linkedin.com/in/benschmidt2343/",
  },
  {
    id: 10,
    name: "Youssef Hamed",
    affiliation: "Co-VP Development",
    image: youssef_jpg,
    linkedin: "https://www.linkedin.com/in/youssef-walid-hamed/",
  },
  {
    id: 11,
    name: "Brian Nguyen",
    affiliation: "Senior Web Developer",
    image: brian_jpg,
    linkedin: "https://www.linkedin.com/in/nguyennbrian/",
  },
  {
    id: 12,
    name: "Parsa Kargari",
    affiliation: "Technical Advisor",
    image: parsa_jpg,
    linkedin: "https://www.linkedin.com/in/parsa-kargari/",
  },
  {
    id: 13,
    name: "Mehrnaz Zafari",
    affiliation: "Cloud Advisor",
    image: mehrnaz_jpg,
    linkedin: "https://www.linkedin.com/in/mehrnaz-zafari/",
  }
];

export const projectManagers: TeamMember[] = [
  {
    id: 0,
    name: "Aarsh Shah",
    affiliation: "CampusBuddy",
    image: aarsh_jpg,
    linkedin: "https://www.linkedin.com/in/aarsh-shah-0a84161a9/",
  },
  {
    id: 1,
    name: "Hilton Luu",
    affiliation: "LocaLoyalty",
    image: hilton_jpg,
    linkedin: "https://www.linkedin.com/in/hilton-luu/",
  },
  {
    id: 2,
    name: "Lujaina Eldelebshany",
    affiliation: "Fashion App",
    image: lujaina_jpg,
    linkedin: "https://www.linkedin.com/in/lujaina-eldelebshany-0029bb1b3/",
  },
  {
    id: 3,
    name: "Wilbur Elbouni",
    affiliation: "Achevio",
    image: wilbur_jpg,
    linkedin: "https://www.linkedin.com/in/wilbur-elbouni-3ba923213/",
  },
  {
    id: 4,
    name: "Naman Bhoj",
    affiliation: "For Your Research",
    image: naman_jpg,
    linkedin: "https://www.linkedin.com/in/naman-bhoj-3032a6154",
  },
  {
    id: 5,
    name: "Hamza Afzaal",
    affiliation: "CraftXR",
    image: hamza_jpg,
    linkedin: "https://www.linkedin.com/in/ammerhamza/",
  },
];

export const boardMembers: TeamMember[] = [
  {
    id: 0,
    name: "Niyousha Raeesinejad",
    affiliation: "2022-2024 President",
    image: niyousha_jpg,
    linkedin: "https://www.linkedin.com/in/niyoushar/",
  },
  {
    id: 1,
    name: "Tyler Chan",
    affiliation: "2023-2024 President",
    image: tyler_jpg,
    linkedin: "https://www.linkedin.com/in/chan-tyler/",
  },
  {
    id: 2,
    name: "Rajpreet Gill",
    affiliation: "2022-2023 President",
    image: rajpreet_jpg,
    linkedin: "https://www.linkedin.com/in/rajpreet-gill/",
  },
];