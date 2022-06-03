import joel_jpg from "../../images/team/Joel_Happ.jpeg";
import fedor_jpg from "../../images/team/Fedor_Prokopchuk.jpg";
import tyler_jpg from "../../images/team/Tyler_Chan.jpg";
import sareen_jpg from "../../images/team/Sareen_Singh.jpg";
import niyousha_jpg from "../../images/team/Niyousha_Raeesinejad.jpg";
import blank_jpg from "../../images/team/Blank.jpeg";
import carol_jpg from "../../images/team/Carol_Wang.jpg";
import kevin_jpg from "../../images/team/Kevin_Amado.jpg";
import sahiti_jpg from "../../images/team/Sahiti_Akella.jpg";
import rajpreet_jpg from "../../images/team/Rajpreet_Gill.jpg";
import mya_jpg from "../../images/team/Mya_Gill.jpg";
import labib_jpg from "../../images/team/Labib_Ahmed.jpg";
import emir_jpg from "../../images/team/Selcuk_Emir_Avci.jpg";

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
    name: "Niyousha Raeesinejad",
    affiliation: "Co-President",
    image: niyousha_jpg,
    linkedin: "https://www.linkedin.com/in/niyoushar/",
    email: "mailto:niyousha.raeesinejad@ucalgary.ca",
  },
  {
    id: 1,
    name: "Rajpreet Gill",
    affiliation: "Co-President",
    image: rajpreet_jpg,
    linkedin: "https://www.linkedin.com/in/rajpreet-gill/",
    email: "mailto:rajpreet.gill@ucalgary.ca",
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
    name: "Sareen Singh",
    affiliation: "VP Events",
    image: sareen_jpg,
    linkedin:
      "https://www.linkedin.com/in/sareen-singh-309b55173/?originalSubdomain=ca",
    email: "mailto:sareen.singh@ucalgary.ca",
  },
  {
    id: 4,
    name: "Carol Wang",
    affiliation: "VP Internal",
    image: carol_jpg,
    linkedin: "https://www.linkedin.com/in/carol-wang3116/",
    email: "mailto:carol.wang2@ucalgary.ca",
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
    name: "Sahiti Akella",
    affiliation: "Jr VP Communications",
    image: sahiti_jpg,
    linkedin: "https://www.linkedin.com/in/sahiti-akella/",
    email: "mailto:sahiti.akella@ucalgary.ca",
  },
  {
    id: 7,
    name: "Kevin Amado",
    affiliation: "VP Development",
    image: kevin_jpg,
    linkedin: "https://www.linkedin.com/in/kamadorueda/",
    email: "mailto:kevin.amadorueda@ucalgary.ca",
  },
  {
    id: 8,
    name: "Mya Gill",
    affiliation: "VP Community",
    image: mya_jpg,
    linkedin: "https://www.linkedin.com/in/mya-gill-71a8451b8/",
    email: "mailto:mya.gill@ucalgary.ca",
  },
  {
    id: 9,
    name: "Labib Afshar Ahmed",
    affiliation: "VP Finance",
    image: labib_jpg,
    linkedin: "https://www.linkedin.com/in/labib-afsar-ahmed/",
    email: "mailto:labibafsar.ahmed@ucalgary.ca",
  },
  {
    id: 10,
    name: "Selcuk Emir Avci",
    affiliation: "VP External",
    image: emir_jpg,
    linkedin: "https://www.linkedin.com/in/selcukemiravci/",
    email: "mailto:selcuk.avci@ucalgary.ca",
  },
  {
    id: 11,
    name: "Joel Happ",
    affiliation: "Founder & Chairman",
    image: joel_jpg,
    linkedin: "https://www.linkedin.com/in/joel-happ/",
    email: "mailto:joel.happ1@ucalgary.ca",
  },
];

projectManagers = [
  {
    id: 0,
    name: "You?",
    affiliation: "Apply now at techstartucalgary.com/apply!",
    image: blank_jpg,
    linkedin: " ",
    email: " ",
  },
];
