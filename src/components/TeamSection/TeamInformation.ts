import joel_jpg from "../../images/team/Joel_Happ.jpeg";
import fedor_jpg from "../../images/team/Fedor_Prokopchuk.jpg";
import tyler_jpg from "../../images/team/Tyler_Chan.jpg";
import niyousha_jpg from "../../images/team/Niyousha_Raeesinejad.jpg";
import carol_jpg from "../../images/team/Carol_Wang.jpg";
import rajpreet_jpg from "../../images/team/Rajpreet_Gill.jpg";
import labib_jpg from "../../images/team/Labib_Ahmed.jpg";
import nathan_jpg from "../../images/team/Nathan_Karbonik.jpg";
import estefy_jpeg from "../../images/team/Estefy_Caballero.jpeg";
import enioluwafe_jpg from "../../images/team/Enioluwafe_Balogun.jpg";
import maheen_jpg from "../../images/team/Maheen_Raza.jpg";
import leo_jpg from "../../images/team/Leo_Wei.jpg";
import rachel_jpg from "../../images/team/Rachel_Renegado.jpg";
import janita_jpg from "../../images/team/Janita_Mahum.jpg";
import abod_jpg from "../../images/team/Abod_Abbas.jpg";
import sajwal_jpg from "../../images/team/Sajwal Pageni.jpg";
import ben_jpg from "../../images/team/Ben_Schmidt.jpg";
import blank_jpg from "../../images/team/Blank.jpeg";

export type TeamMember = {
  id: number;
  name: string;
  affiliation: string; // Affiliation refers to roles and projects for executives and PMs respectively
  image: string;
  linkedin: string;
};

export const executiveTeam: TeamMember[] = [
  {
    id: 0,
    name: "Niyousha Raeesinejad",
    affiliation: "Co-President",
    image: niyousha_jpg,
    linkedin: "https://www.linkedin.com/in/niyoushar/",
  },
  {
    id: 1,
    name: "Tyler Chan",
    affiliation: "Co-President",
    image: tyler_jpg,
    linkedin: "https://www.linkedin.com/in/chan-tyler/",
  },
  {
    id: 2,
    name: "Rachel Renegado",
    affiliation: "VP Internal",
    image: rachel_jpg,
    linkedin: "https://www.linkedin.com/in/rachel-renegado-544409201",
  },
  {
    id: 3,
    name: "Nathan Karbonik",
    affiliation: "External Advisor",
    image: nathan_jpg,
    linkedin: "https://www.linkedin.com/in/nathan-karbonik/",
  },
  {
    id: 9,
    name: "Leo Wei",
    affiliation: "Co-VP Events",
    image: leo_jpg,
    linkedin: "https://www.linkedin.com/in/leo-wei/",
  },
  {
    id: 10,
    name: "Janita Mahum",
    affiliation: "VP Design",
    image: janita_jpg,
    linkedin: "https://www.linkedin.com/in/janita-mahum-a5484a1b9/",
  },
  {
    id: 13,
    name: "Fedor Prokopchuk",
    affiliation: "Business Strategy Advisor",
    image: fedor_jpg,
    linkedin: "https://www.linkedin.com/in/fedor-prokopchuk-707668a6/",
  },
  {
    id: 4,
    name: "Carol Wang",
    affiliation: "VP Community",
    image: carol_jpg,
    linkedin: "https://www.linkedin.com/in/carol-wang3116/",
  },
  {
    id: 5,
    name: "Enioluwafe Balogun",
    affiliation: "Co-VP Communications",
    image: enioluwafe_jpg,
    linkedin: "https://www.linkedin.com/in/enioluwafe-balogun/",
  },
  {
    id: 11,
    name: "Abod Abbas",
    affiliation: "Senior Technical Advisor",
    image: abod_jpg,
    linkedin: "https://www.linkedin.com/in/abod-a-427274198/",
  },
  {
    id: 6,
    name: "Estefy Caballero",
    affiliation: "Co-VP Communications",
    image: estefy_jpeg,
    linkedin: "https://www.linkedin.com/in/estefy-caballero-864aab25a",
  },
    {
    id: 16,
    name: "Ben Schmidt",
    affiliation: "VP Development",
    image: ben_jpg,
    linkedin: "https://www.linkedin.com/in/benschmidt2343/",
  },

  {
    id: 7,
    name: "Labib Afshar Ahmed",
    affiliation: "VP Finance",
    image: labib_jpg,
    linkedin: "https://www.linkedin.com/in/labib-afsar-ahmed/",
  },
  {
    id: 12,
    name: "Sajwal Pageni",
    affiliation: "VP Strategy",
    image: sajwal_jpg,
    linkedin: "https://www.linkedin.com/in/sajwal/",
  },
  {
    id: 8,
    name: "Maheen Raza",
    affiliation: "Co-VP Events",
    image: maheen_jpg,
    linkedin: "https://www.linkedin.com/in/maheen-raza-40b780229/",
  },
  {
    id: 14,
    name: "Joel Happ",
    affiliation: "Founder & Chairman",
    image: joel_jpg,
    linkedin: "https://www.linkedin.com/in/joel-happ/",
  },
  {
    id: 15,
    name: "Rajpreet Gill",
    affiliation: "Board Member",
    image: rajpreet_jpg,
    linkedin: "https://www.linkedin.com/in/rajpreet-gill/",
  },
];

export const projectManagers: TeamMember[] = [
  {
    id: 0,
    name: "You?",
    affiliation: "Apply now at techstartucalgary.com/apply!",
    image: blank_jpg,
    linkedin: " ",
  },
];
