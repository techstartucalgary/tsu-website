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
import achevio from "images/projects/Achevio.png"
import campusBuddy from "images/projects/CampusBuddy.jpg";
import locaLoyalty from "images/projects/LocaLoyalty.png";
import craftXR from "images/projects/Craftxr.jpg";
import reThread from "images/projects/Rethread.png";
import fyr from "images/projects/ForYourResearch.jpg";
import easyMealTeam from "images/showcaseWinners/2023_best_overall.jpg";
import localoyaltyTeam from "images/showcaseWinners/2024_best_overall.jpg";

// Project type definition
export type Project = {
  name: string;
  image: string;
  github: string;
  website: URL;
  pmName: string;
  description: string;
  year: string;
  featured: boolean;
  showcaseWinner: boolean;
  teamPic?: string;
  winnerPost?: string,
  videoEmbedID: string;
};

const website = new URL("https://tech-start-website.web.app/");

// An array of our projects, which is used in the Projects page
export const PastProjects: Project[] = [
  {
    name: "Achevio",
    github: "https://github.com/techstartucalgary/achevio/",
    website: website,
    image: achevio,
    pmName: "Wilbur Elbouni",
    year: "2023-2024",
    description:
      "A new take on social media where you join goal-focused communities.",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "CraftXR",
    github: "https://github.com/techstartucalgary/",
    website: website,
    image: craftXR,
    pmName: "Hamza Afzaal",
    year: "2023-2024",
    description:
      "A tool for building immersive experiences.",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "CampusBuddy",
    github: "https://github.com/techstartucalgary/CampusBuddy",
    website: website,
    image: campusBuddy,
    pmName: "Aarsh Shah",
    year: "2023-2024",
    description:
      "A mobile app that bridges the gaps that students face on a day to day basis.",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "LocaLoyalty",
    github: "https://github.com/techstartucalgary/LocaLoyalty",
    website: website,
    image: locaLoyalty,
    pmName: "Hilton Luu",
    year: "2023-2024",
    description:
      "A platform for small businesses to create and launch their own loyalty program through the form of virtual stamp cards.",
    featured: false,
    showcaseWinner: true,
    teamPic: localoyaltyTeam,
    winnerPost: "https://www.linkedin.com/posts/tech-start-ucalgary_our-2024-final-showcase-was-an-astounding-activity-7190521165465948160-JCqf?utm_source=share",
    videoEmbedID: "",
  },
  {
    name: "reThread",
    github: "https://github.com/techstartucalgary/Rethread",
    website: website,
    image: reThread,
    pmName: "Aarsh Shah",
    year: "2023-2024",
    description:
      "An app that educates and rewards consumers based on how sustainable their fashion consumption choices are.",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "For Your Research",
    github: "https://github.com/techstartucalgary/For-Your-Research",
    website: website,
    image: fyr,
    pmName: "Naman Bhoj",
    year: "2023-2024",
    description:
      "Helping you iterate faster in your research processes from collection to analysis of scientific literature.",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "Bandist",
    github: "https://github.com/techstartucalgary/Bandist",
    website: website,
    image: bandist,
    pmName: "Nurgul Akhshatayeva",
    year: "2022-2023",
    description:
      "A cross-platform application for music enthusiasts to get notified of the latest concerts of their favorite artists.",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "CyberHire",
    github: "https://github.com/techstartucalgary/CyberHire",
    website: website,
    image: cyberHire,
    pmName: "Ben Schmidt",
    year: "2022-2023",
    description: "A platform for employers and applicants to connect.",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "Lifeline",
    github: "https://github.com/techstartucalgary/lifeline",
    pmName: "Timothy Macphail",
    website: website,
    image: lifeLine,
    year: "2022-2023",
    description:
      "Lifeline uses AI to extract and organize deadlines from course documents for you to download.",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "EasyMeal",
    github: "https://github.com/techstartucalgary/EasyMeal",
    website: website,
    image: easyMeal,
    pmName: "Nemanja Grujic",
    year: "2022-2023",
    description:
      "EasyMeal generates recipes for you based on your budget and tastes.",
    featured: true,
    showcaseWinner: true,
    teamPic: easyMealTeam,
    winnerPost: "https://www.linkedin.com/feed/update/urn:li:activity:7058573838405550080/?utm_source=share",
    videoEmbedID: "jk-dVia1yqo",
  },
  {
    name: "AiRM",
    github: "https://github.com/techstartucalgary/RoboticArm",
    pmName: "Leo Wei",
    website: website,
    image: airm,
    year: "2022-2023",
    description:
      "Robotic arm using reinforcement learning to help robots learn and adapt to new environments.",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "TechstArcade",
    github: "https://github.com/techstartucalgary/techstarcade",
    pmName: "Madeline Mazurek",
    website: website,
    image: techstarcade,
    year: "2022-2023",
    description: "Retro style mini games in a arcade style chrome extension.",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "NoteAId",
    github: "https://github.com/Tech-Start-UCalgary/NoteAId",
    website: website,
    image: noteAid,
    pmName: "Mahdi Varposhti",
    year: "2021-2022",
    description:
      "A mobile app that helps students with studying for exams by summarizing their handwritten notes",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "Aquavolution",
    github: "https://github.com/Tech-Start-UCalgary/Aquavolution",
    website: website,
    image: aquavolution,
    pmName: "Elgiz Abbasov",
    year: "2021-2022",
    description:
      "Born a tiny fish, try to survive among other predators, be careful of the human waste in the ocean though!",
    featured: true,
    showcaseWinner: false,
    videoEmbedID: "9SqZWb1-tw0",
  },
  {
    name: "Where To?",
    github: "https://github.com/Tech-Start-UCalgary/decision-frontend",
    website: website,
    image: whereTo,
    pmName: "Vivian Huynh",
    year: "2021-2022",
    description:
      "An app that helps groups make decisions when planning a social gathering by voting",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "Snowbot",
    github: "",
    website: website,
    image: snowbot,
    pmName: "Ali Siddiqi",
    year: "2021-2022",
    description: "A robot that autonomously clears snow on sidewalks",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "OneApp",
    github: "https://github.com/glassthunder/TECHSTART",
    pmName: "Felix Vaughan",
    website: website,
    image: oneHub,
    year: "2020-2021",
    description:
      "A hub for your social media that shows you info and stats from your favorite sites. Switching apps is so 2020!",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "SupplyMe",
    github: "https://github.com/Tech-Start-UCalgary/SupplyMe",
    pmName: "Darryl Huët",
    website: website,
    image: supplyMe,
    year: "2020-2021",
    description:
      "An app that uses the Ethereum blockchain with QR Codes to track package and parcel transfers",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "Resume Tracker",
    github: "2020-2021",
    pmName: "Daniel Rashidian",
    website: website,
    image: resumeTracker,
    year: "",
    description:
      "Resume Tracker rates your resume and provides feedback on how to improve it",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
  {
    name: "TSU Website",
    github: "https://github.com/Tech-Start-UCalgary/tsu-website",
    pmName: "Joel Happ, Niyousha Raeesinejad",
    website: website,
    image: techStartWebsite,
    year: "2020-2021",
    description:
      "We built this website from scratch with React, TypeScript, and a Django backend!",
    featured: false,
    showcaseWinner: false,
    videoEmbedID: "",
  },
];

export const CurrentProjects: Project[] = [];
