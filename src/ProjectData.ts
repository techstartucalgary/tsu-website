/**
 * This file contains the information for projects. This information will be automatically added to the home page.
 * If you want to edit the info for any project, do it here!
 * All image sizes should be a 16:9 Aspect ratio
 */

import { TeamMember } from "components/TeamSection/TeamInformation";

import temp from "images/temp.jpg";
import techStartWebsite from "images/project/techStartWebsite.png";
import supplyMe from "images/project/supplyMe4.png";
import resumeTracker from "images/project/resumetracker.png";
import oneHub from "images/project/oneHub.png";

// Project type definition
export type Project = {
  id: number;
  name: string;
  image: string;
  github: string;
  website: URL;
  pmName: string;
  description: string;
};

// An array of our projects, which is used by HomePage.tsx
export const OurProjects: Project[] = [
  {
    id: 0,
    name: "Tech Start Website",
    github: "https://github.com/Tech-Start-UCalgary/tsu-website",
    pmName: "Joel Happ",
    website: new URL("https://tech-start-website.web.app/"),
    image: techStartWebsite,
    description:
      "We built this website from scratch with React, TypeScript, and a Django backend!",
  },
  {
    id: 1,
    name: "OneApp",
    github: "https://github.com/glassthunder/TECHSTART",
    pmName: "Felix Vaughan",
    website: new URL("https://tech-start-website.web.app/"),
    image: oneHub,
    description:
      "A hub for your social media that shows you info and stats from your favorite social media sites. Switching apps is so 2020!",
  },
  {
    id: 2,
    name: "SupplyMe",
    github: "https://github.com/Tech-Start-UCalgary/SupplyMe",
    pmName: "Darryl Huët",
    website: new URL("https://tech-start-website.web.app/"),
    image: supplyMe,
    description:
      "An app that uses the Ethereum blockchain with QR Codes to track package and parcel transfers",
  },
  {
    id: 3,
    name: "Resume Tracker",
    github: "https://github.com/armeenrn/ResumeTrackerApp",
    pmName: "Daniel Rashidian",
    website: new URL("https://tech-start-website.web.app/"),
    image: resumeTracker,
    description:
      "Resume Tracker rates your resume and provides feedback on how to improve it",
  },
];
