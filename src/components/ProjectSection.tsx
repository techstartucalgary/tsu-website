import React from "react";
import "./ProjectSection.css";
import { PastProjects } from "ProjectData";
import FeaturedProject from "./FeaturedProject";

function ProjectSection() {
  return (
    <div className="projectSection">
      <FeaturedProject project={PastProjects[0]} />
      <FeaturedProject project={PastProjects[1]} />
      <FeaturedProject project={PastProjects[2]} />
      <FeaturedProject project={PastProjects[3]} />
    </div>
  );
}

export default ProjectSection;
