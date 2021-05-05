import { Project } from "ProjectData";
import React from "react";
import './FeaturedProject.css'
import ProjectSection from "./ProjectSection";

/**
 * TODO: Re-implement
 */

interface featuredProjectProps {
  project: Project
}
function FeaturedProject(props: featuredProjectProps) {
  return <div className="box"><img src={props.project.image} /></div>

  // return<a href={props.projectLink} className="projectItem">
  //     <img src={props.projectImage} alt=""/>
  //     <p className="projectItem__Details">
  //       <span className="">{props.projectName}</span>
  //       {props.teamName}
  //     </p>
  //   </a>;
}

export default FeaturedProject;
