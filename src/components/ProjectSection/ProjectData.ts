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

// Project type definition
export type Project = {
  id: number;
  name: string;
  image?: string;
  github: string;
  website: URL;
  pmName: string;
  description: string;
};

const website = new URL("https://tech-start-website.web.app/");

// An array of our projects, which is used in the Projects page
export const PastProjects: Project[] = [
  {
    id: 0,
    name: "NoteAId",
    github: "https://github.com/Tech-Start-UCalgary/NoteAId",
    website: website,
    image: noteAid,
    pmName: "Mahdi Varposhti",
    description:
      "A mobile app that helps students with studying for exams by summarizing their handwritten notes",
  },
  {
    id: 1,
    name: "Where To?",
    github: "https://github.com/Tech-Start-UCalgary/decision-frontend",
    website: website,
    image: whereTo,
    pmName: "Vivian Huynh",
    description:
      "An app that helps groups make decisions when planning a social gathering by voting",
  },
  {
    id: 2,
    name: "Aquavolution",
    github: "https://github.com/Tech-Start-UCalgary/Aquavolution",
    website: website,
    image: aquavolution,
    pmName: "Elgiz Abbasov",
    description:
      "Born a tiny fish, try to survive among other predators, be careful of the human waste in the ocean though!",
  },
  {
    id: 3,
    name: "Snowbot",
    github: "",
    website: website,
    image: snowbot,
    pmName: "Ali Siddiqi",
    description: "A robot that autonomously clears snow on sidewalks",
  },
  {
    id: 4,
    name: "OneApp",
    github: "https://github.com/glassthunder/TECHSTART",
    pmName: "Felix Vaughan",
    website: website,
    image: oneHub,
    description:
      "A hub for your social media that shows you info and stats from your favorite sites. Switching apps is so 2020!",
  },
  {
    id: 5,
    name: "SupplyMe",
    github: "https://github.com/Tech-Start-UCalgary/SupplyMe",
    pmName: "Darryl Huët",
    website: website,
    image: supplyMe,
    description:
      "An app that uses the Ethereum blockchain with QR Codes to track package and parcel transfers",
  },
  {
    id: 6,
    name: "Resume Tracker",
    github: "",
    pmName: "Daniel Rashidian",
    website: website,
    image: resumeTracker,
    description:
      "Resume Tracker rates your resume and provides feedback on how to improve it",
  },
  {
    id: 7,
    name: "Tech Start Website",
    github: "https://github.com/Tech-Start-UCalgary/tsu-website",
    pmName: "Joel Happ, Niyousha Raeesinejad",
    website: website,
    image: techStartWebsite,
    description:
      "We built this website from scratch with React, TypeScript, and a Django backend!",
  },
];

export const CurrentProjects: Project[] = [];
