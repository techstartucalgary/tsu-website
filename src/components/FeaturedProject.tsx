import { Project } from "ProjectData";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import './FeaturedProject.css'
import ProjectSection from "./ProjectSection";

/**
 * TODO: Re-implement
 */

interface featuredProjectProps {
  project: Project
}
function FeaturedProject(props: featuredProjectProps) {
  const [projectImageClass, setProjectImageClass] = useState("");
  const [projectDescriptionClass, setprojectDescriptionClass] = useState("")

  function mouseLeave() {
    setProjectImageClass("")
    setprojectDescriptionClass("")

  }
  function mouseEnter() {
    setProjectImageClass("project__image--transparent")
    setprojectDescriptionClass("project__description--visible")

  }
  return <div className="project__container" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
    <img src={props.project.image} className={"project__image " + projectImageClass} />

    <div className={"project__content " + projectDescriptionClass}>{props.project.description}
      <a href={props.project.github} target="_blank"><div className="project__button" >Visit GitHub →</div></a>
    </div>

  </div>
  {/*<a href="https://github.com/Tech-Start-UCalgary/tsu-website" className="featuredProjectSection">
    <div className="featuredProject">
      <img className="featuredProjectImage" src={props.project.image}></img>

      <div className="featuredProjectDescription">{props.project.description}</div>
    </div>

</a>*/}

  // return<a href={props.projectLink} className="projectItem">
  //     <img src={props.projectImage} alt=""/>
  //     <p className="projectItem__Details">
  //       <span className="">{props.projectName}</span>
  //       {props.teamName}
  //     </p>
  //   </a>;
}

export default FeaturedProject;
