/**
 * This file contains the information for projects. This information will be automatically added to the home page.
 * If you want to edit the info for any project, do it here!
 * All image sizes should be a 16:9 Aspect ratio
 */

import techStartWebsitePast from "images/project/techStartWebsite-past.svg";
import techStartWebsiteNew from "images/project/techStartWebsite-new.png";
import supplyMe from "images/project/supplyMe.png";
import resumeTracker from "images/project/resumetracker.png";
import oneHub from "images/project/oneHub.png";
import aquavolution from "images/project/aquavolution.jpg";
import snowbot from "images/project/snowbot.jpg";
import noteAid from "images/project/noteAid.jpg";
import whereTo from "images/project/whereTo.jpg";

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

// An array of our projects, which is used by HomePage.tsx
export const PastProjects: Project[] = [
  {
    id: 0,
    name: "Tech Start Website",
    github: "https://github.com/Tech-Start-UCalgary/tsu-website",
    pmName: "Joel Happ",
    website: website,
    image: techStartWebsitePast,
    description:
      "We built this website from scratch with React, TypeScript, and a Django backend!",
  },
  {
    id: 1,
    name: "OneApp",
    github: "https://github.com/glassthunder/TECHSTART",
    pmName: "Felix Vaughan",
    website: website,
    image: oneHub,
    description:
      "A hub for your social media that shows you info and stats from your favorite sites. Switching apps is so 2020!",
  },
  {
    id: 2,
    name: "SupplyMe",
    github: "https://github.com/Tech-Start-UCalgary/SupplyMe",
    pmName: "Darryl Huët",
    website: website,
    image: supplyMe,
    description:
      "An app that uses the Ethereum blockchain with QR Codes to track package and parcel transfers",
  },
  {
    id: 3,
    name: "Resume Tracker",
    github: "",
    pmName: "Daniel Rashidian",
    website: website,
    image: resumeTracker,
    description:
      "Resume Tracker rates your resume and provides feedback on how to improve it",
  },
];

export const CurrentProjects: Project[] = [
  {
    id: 0,
    name: "Aquavolution",
    github: "https://github.com/Tech-Start-UCalgary/Aquavolution",
    website: website,
    image: aquavolution,
    pmName: "Elgiz Abbasov",
    description:
      "Born a tiny fish, try to survive among other predators, be careful of the human waste in the ocean though!",
  },
  {
    id: 1,
    name: "Tech Start Website",
    github: "https://github.com/Tech-Start-UCalgary/tsu-website",
    pmName: "Niyousha Raeesinejad",
    website: website,
    image: techStartWebsiteNew,
    description: "We made some cool upgrades to the TechStart Website!",
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
    id: 3,
    name: "NoteAId",
    github: "https://github.com/Tech-Start-UCalgary/NoteAId",
    website: website,
    image: noteAid,
    pmName: "Mahdi Varposhti",
    description:
      "A mobile app that helps students with studying for exams by summarizing their handwritten notes",
  },
  {
    id: 4,
    name: "Where To?",
    github: "https://github.com/Tech-Start-UCalgary/decision-frontend",
    website: website,
    image: whereTo,
    pmName: "Vivian Huynh",
    description:
      "An app that helps groups make decisions when planning a social gathering by voting",
  },
];
