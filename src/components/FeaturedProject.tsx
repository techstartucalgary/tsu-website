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
  return <a href="https://github.com/Tech-Start-UCalgary/tsu-website" className="featuredProjectSection">
    <div className="featuredProject">
      <img className="featuredProjectImage" src={props.project.image}></img>

      <div className="featuredProjectDescription">{props.project.description}</div>
    </div>

  </a>

  // return<a href={props.projectLink} className="projectItem">
  //     <img src={props.projectImage} alt=""/>
  //     <p className="projectItem__Details">
  //       <span className="">{props.projectName}</span>
  //       {props.teamName}
  //     </p>
  //   </a>;
}

export default FeaturedProject;
