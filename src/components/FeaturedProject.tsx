import React from "react";
import './FeaturedProject.css'

function FeaturedProject(props: any) {
  return <a href={props.projectLink} className="projectItem">
    <img src={props.projectImage} alt="" />
    <p className="projectItem__Details">
      <span className="">{props.projectName}</span>
      {props.teamName}
    </p>
  </a>;
}

export default FeaturedProject;
