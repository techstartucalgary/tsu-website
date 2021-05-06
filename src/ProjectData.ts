/**
 * This file contains the information for projects. This information will be automatically added to the home page.
 * If you want to edit the info for any project, do it here!
 */

import { ProjectManager } from "components/TeamSection/TeamInformation";

import temp from "images/temp.jpg";


// Project type definition
export type Project = { id: number, name: string, image: any, github: URL, website: URL, pmName: string, description: string};


// An array of our projects, which is used by HomePage.tsx
export const OurProjects: Project[] = [
    {id: 0, name:"Tech Start Website", github: new URL("https://github.com/Tech-Start-UCalgary/tsu-website"), pmName: "Joel Happ", website: new URL("https://tech-start-website.web.app/"), image: temp, 
    description: "We built this website from scratch with React, TypeScript, and a Django backend!"},
    {id: 1, name:"OneHub", github: new URL("https://github.com/Tech-Start-UCalgary/tsu-website"), pmName: "Felix Vaughan", website: new URL("https://tech-start-website.web.app/"), image: temp, 
    description: "A hub for your social media that shows you info and stats from your favorite social media sites"},
    {id: 2, name:"SupplyMe", github: new URL("https://github.com/Tech-Start-UCalgary/SupplyMe"), pmName: "Darryl Huët", website: new URL("https://tech-start-website.web.app/"), image: temp, 
    description: "An app that uses the Ethereum blockchain with QR Codes to track package and parcel transfers"},
    {id: 3, name:"Resume Tracker", github: new URL("https://github.com/armeenrn/ResumeTrackerApp"), pmName: "Daniel Rashidian", website: new URL("https://tech-start-website.web.app/"), image: temp, 
    description: "Resume Tracker rates your resume and provides feedback on how to improve it"},
]
