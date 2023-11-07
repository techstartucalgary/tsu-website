/**
 * This file contains the information for projects. This information will be automatically added to the projects page.
 * If you want to edit the info for any project, do it here!
 * All image sizes should be a 16:9 Aspect ratio
 */

import techStartWebsite from "images/projects/techStartWebsite.png";
import supplyMe from "images/projects/supplyMe.png";
import resumeTracker from "images/projects/resumetracker.png";
import oneHub from "images/projects/oneHub.png";
import aquavolution from "images/projects/aquavolution.jpg";
import snowbot from "images/projects/snowbot.jpg";
import noteAid from "images/projects/noteAid.jpg";
import whereTo from "images/projects/whereTo.jpg";
import lifeLine from "images/projects/lifeline.png";
import easyMeal from "images/projects/easymeal.jpg";
import airm from "images/projects/AiRM.png";
import techstarcade from "images/projects/Techstarcade.jpg";
import bandist from "images/projects/Bandist.jpg";
import cyberHire from "images/projects/CyberHire.jpg";

// Project type definition
export type Project = {
  id: number;
  name: string;
  image?: string;
  github: string;
  website: URL;
  pmName: string;
  description: string;
  year: string;
  featured: boolean;
};

const website = new URL("https://tech-start-website.web.app/");

// An array of our projects, which is used in the Projects page
export const PastProjects: Project[] = [
  {
    id: 0,
    name: "Bandist",
    github: "https://github.com/techstartucalgary/Bandist",
    website: website,
    image: bandist,
    pmName: "Nurgul Akhshatayeva",
    year: "",
    description:
      "A cross-platform application for music enthusiasts to get notified of the latest concerts of their favorite artists.",
    featured: false,
  },
  {
    id: 1,
    name: "CyberHire",
    github: "https://github.com/techstartucalgary/CyberHire",
    website: website,
    image: cyberHire,
    pmName: "Ben Schmidt",
    year: "",
    description: "A platform for employers and applicants to connect.",
    featured: false,
  },
  {
    id: 2,
    name: "Lifeline",
    github: "https://github.com/techstartucalgary/lifeline",
    pmName: "Timothy Macphail",
    website: website,
    image: lifeLine,
    year: "",
    description:
      "Lifeline uses AI to extract and organize deadlines from course documents for you to download.",
    featured: false,
  },
  {
    id: 3,
    name: "EasyMeal",
    github: "https://github.com/techstartucalgary/EasyMeal",
    website: website,
    image: easyMeal,
    pmName: "Nemanja Grujic",
    year: "2022-2023",
    description:
      "EasyMeal generates recipes for you based on your budget and tastes.",
    featured: true,
  },
  {
    id: 4,
    name: "AiRM",
    github: "https://github.com/techstartucalgary/RoboticArm",
    pmName: "Leo Wei",
    website: website,
    image: airm,
    year: "",
    description:
      "Robotic arm using reinforcement learning to help robots learn and adapt to new environments.",
    featured: false,
  },
  {
    id: 5,
    name: "TechstArcade",
    github: "https://github.com/techstartucalgary/techstarcade",
    pmName: "Madeline Mazurek",
    website: website,
    image: techstarcade,
    year: "",
    description: "Retro style mini games in a arcade style chrome extension.",
    featured: false,
  },
  {
    id: 6,
    name: "NoteAId",
    github: "https://github.com/Tech-Start-UCalgary/NoteAId",
    website: website,
    image: noteAid,
    pmName: "Mahdi Varposhti",
    year: "",
    description:
      "A mobile app that helps students with studying for exams by summarizing their handwritten notes",
    featured: false,
  },
  {
    id: 7,
    name: "Aquavolution",
    github: "https://github.com/Tech-Start-UCalgary/Aquavolution",
    website: website,
    image: aquavolution,
    pmName: "Elgiz Abbasov",
    year: "2021-2022",
    description:
      "Born a tiny fish, try to survive among other predators, be careful of the human waste in the ocean though!",
    featured: true,
  },
  {
    id: 8,
    name: "Where To?",
    github: "https://github.com/Tech-Start-UCalgary/decision-frontend",
    website: website,
    image: whereTo,
    pmName: "Vivian Huynh",
    year: "",
    description:
      "An app that helps groups make decisions when planning a social gathering by voting",
    featured: false,
  },
  {
    id: 9,
    name: "Snowbot",
    github: "",
    website: website,
    image: snowbot,
    pmName: "Ali Siddiqi",
    year: "",
    description: "A robot that autonomously clears snow on sidewalks",
    featured: false,
  },
  {
    id: 10,
    name: "OneApp",
    github: "https://github.com/glassthunder/TECHSTART",
    pmName: "Felix Vaughan",
    website: website,
    image: oneHub,
    year: "",
    description:
      "A hub for your social media that shows you info and stats from your favorite sites. Switching apps is so 2020!",
    featured: false,
  },
  {
    id: 11,
    name: "SupplyMe",
    github: "https://github.com/Tech-Start-UCalgary/SupplyMe",
    pmName: "Darryl Huët",
    website: website,
    image: supplyMe,
    year: "",
    description:
      "An app that uses the Ethereum blockchain with QR Codes to track package and parcel transfers",
    featured: false,
  },
  {
    id: 12,
    name: "Resume Tracker",
    github: "",
    pmName: "Daniel Rashidian",
    website: website,
    image: resumeTracker,
    year: "",
    description:
      "Resume Tracker rates your resume and provides feedback on how to improve it",
    featured: false,
  },
  {
    id: 13,
    name: "TSU Website",
    github: "https://github.com/Tech-Start-UCalgary/tsu-website",
    pmName: "Joel Happ, Niyousha Raeesinejad",
    website: website,
    image: techStartWebsite,
    year: "",
    description:
      "We built this website from scratch with React, TypeScript, and a Django backend!",
    featured: false,
  },
];

export const CurrentProjects: Project[] = [];
