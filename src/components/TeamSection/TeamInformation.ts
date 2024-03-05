import fedor_jpg from "../../images/team/Fedor_Prokopchuk.jpg";
import tyler_jpg from "../../images/team/Tyler_Chan.jpg";
import niyousha_jpg from "../../images/team/Niyousha_Raeesinejad.jpg";
import carol_jpg from "../../images/team/Carol_Wang.jpg";
import rajpreet_jpg from "../../images/team/Rajpreet_Gill.jpg";
import labib_jpg from "../../images/team/Labib_Ahmed.jpg";
import nathan_jpg from "../../images/team/Nathan_Karbonik.jpg";
import ana_jpg from "../../images/team/Ana_Laura.jpg";
import estefy_jpeg from "../../images/team/Estefy_Caballero.jpeg";
import enioluwafe_jpg from "../../images/team/Enioluwafe_Balogun.jpg";
import maheen_jpg from "../../images/team/Maheen_Raza.jpg";
import leo_jpg from "../../images/team/Leo_Wei.jpg";
import rachel_jpg from "../../images/team/Rachel_Renegado.jpg";
import janita_jpg from "../../images/team/Janita_Mahum.jpg";
import abod_jpg from "../../images/team/Abod_Abbas.jpg";
import sajwal_jpg from "../../images/team/Sajwal Pageni.jpg";
import ben_jpg from "../../images/team/Ben_Schmidt.jpg";
import waika_jpg from "../../images/team/Wai_Ka_Wong.jpg";
import sahiti_jpg from "../../images/team/Sahiti_Akella.jpg";
import isaiah_jpg from "../../images/team/Isaiah_Asaolu.jpg";
import aarsh_jpg from "../../images/team/Aarsh_Shah.jpg";
import hilton_jpg from "../../images/team/Hilton_Luu.jpg";
import wilbur_jpg from "../../images/team/Wilbur_Elbouni.jpg";
import naman_jpg from "../../images/team/Naman_Bhoj.jpg";
import lujaina_jpg from "../../images/team/Lujaina_ Eldelebshany.jpg";
import hamza_jpg from "../../images/team/Hamza_Afzaal.jpg";
import Maham_jpg from "../../images/team/Maham_Jamal.jpg";
import brian_jpg from "../../images/team/Brian_Nguyen.jpg";
import joel_jpg from "../../images/team/Joel_Happ.jpeg";
import cindy_jpg from "../../images/team/Cindy_Cheng.jpg";

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
    id: 4,
    name: "Ana Laura Espinosa Garza",
    affiliation: "VP External",
    image: ana_jpg,
    linkedin: "https://www.linkedin.com/in/ana-laura-espinosa-garza-136a281b0/",
  },
  {
    id: 5,
    name: "Cindy Cheng",
    affiliation: "Jr. VP External",
    image: cindy_jpg,
    linkedin: "https://www.linkedin.com/in/cindy-cheng-66328a2b8/"
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
    affiliation: "Co-VP Communications",
    image: estefy_jpeg,
    linkedin: "https://www.linkedin.com/in/estefy-caballero-864aab25a",
  },
  {
    id: 8,
    name: "Enioluwafe Balogun",
    affiliation: "Co-VP Communications",
    image: enioluwafe_jpg,
    linkedin: "https://www.linkedin.com/in/enioluwafe-balogun/",
  },
  {
    id: 9,
    name: "Maham Jamal",
    affiliation: "Media Commissioner",
    image: Maham_jpg,
    linkedin: "https://www.linkedin.com/in/maham-jamal-126a04258",
  },
  {
    id: 10,
    name: "Leo Wei",
    affiliation: "Co-VP Events",
    image: leo_jpg,
    linkedin: "https://www.linkedin.com/in/leo-wei/",
  },
  {
    id: 11,
    name: "Maheen Raza",
    affiliation: "Co-VP Events",
    image: maheen_jpg,
    linkedin: "https://www.linkedin.com/in/maheen-raza-40b780229/",
  },
  {
    id: 12,
    name: "Labib Afshar Ahmed",
    affiliation: "VP Finance",
    image: labib_jpg,
    linkedin: "https://www.linkedin.com/in/labib-afsar-ahmed/",
  },
  {
    id: 13,
    name: "Janita Mahum",
    affiliation: "VP Design",
    image: janita_jpg,
    linkedin: "https://www.linkedin.com/in/janita-mahum-a5484a1b9/",
  },
  {
    id: 14,
    name: "Ben Schmidt",
    affiliation: "VP Development",
    image: ben_jpg,
    linkedin: "https://www.linkedin.com/in/benschmidt2343/",
  },
  {
    id: 15,
    name: "Abod Abbas",
    affiliation: "Senior Technical Advisor",
    image: abod_jpg,
    linkedin: "https://www.linkedin.com/in/abod-a-427274198/",
  },
  {
    id: 16,
    name: "Wai Ka Wong",
    affiliation: "Technical Advisor",
    image: waika_jpg,
    linkedin: "https://www.linkedin.com/in/waika-wong/",
  },

  {
    id: 17,
    name: "Sajwal Pageni",
    affiliation: "VP Strategy",
    image: sajwal_jpg,
    linkedin: "https://www.linkedin.com/in/sajwal/",
  },
  {
    id: 18,
    name: "Fedor Prokopchuk",
    affiliation: "Business Strategy Advisor",
    image: fedor_jpg,
    linkedin: "https://www.linkedin.com/in/fedor-prokopchuk-707668a6/",
  },
  {
    id: 19,
    name: "Brian Nguyen",
    affiliation: "Senior Web Developer",
    image: brian_jpg,
    linkedin: "https://www.linkedin.com/in/nguyennbrian/",
  },
  {
    id: 20,
    name: "Sahiti Akella",
    affiliation: "Web Developer",
    image: sahiti_jpg,
    linkedin: "https://www.linkedin.com/in/sahiti-akella/",
  },
  {
    id: 21,
    name: "Isaiah Asaolu",
    affiliation: "Web Developer",
    image: isaiah_jpg,
    linkedin: "https://www.linkedin.com/in/isaiah-a-2001/",
  },
  {
    id: 22,
    name: "Rajpreet Gill",
    affiliation: "Board Member",
    image: rajpreet_jpg,
    linkedin: "https://www.linkedin.com/in/rajpreet-gill/",
  },
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
