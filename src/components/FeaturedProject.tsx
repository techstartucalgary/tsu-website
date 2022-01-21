import { Project } from "ProjectData";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import "./FeaturedProject.css";
import ProjectSection from "./ProjectSection";

interface featuredProjectProps {
  project: Project;
}
function FeaturedProject(props: featuredProjectProps) {
  const [projectImageClass, setProjectImageClass] = useState("");
  const [projectDescriptionClass, setprojectDescriptionClass] = useState("");

  function mouseLeave() {
    setProjectImageClass("");
    setprojectDescriptionClass("");
  }
  function mouseEnter() {
    setProjectImageClass("project__image--transparent");
    setprojectDescriptionClass("project__description--visible");
  }
  return (
    <div
      className="project__container"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      data-aos="zoom-in"
      data-aos-duration="2500"
    >
      <img
        src={props.project.image}
        className={"project__image " + projectImageClass}
      />

      <div className={"project__content " + projectDescriptionClass}>
        {props.project.description}
        <a className="project__button" href={props.project.github} target="_blank">
          <div>Visit Project</div>
        </a>
      </div>
    </div>
  );
}

export default FeaturedProject;
