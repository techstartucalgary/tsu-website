import React from "react";

function FeaturedProject(props: any) {
  return<a href={props.projectLink} className="homePage__projectItem">
      <img src={props.projectImage} alt="" className="homePage__projectImage" />
      <p className="homePage__projectDetails">
        <span className="">{props.projectName}</span>
        {props.teamName}
      </p>
    </a>;
}

export default FeaturedProject;
