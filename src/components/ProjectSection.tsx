import React from "react";
import { OurProjects, Project } from "ProjectData";
import FeaturedProject from "./FeaturedProject";

function ProjectSection(){
    return <div>
        <FeaturedProject project={OurProjects[0]} />
        <FeaturedProject project={OurProjects[1]} />
        <FeaturedProject project={OurProjects[2]} />
        <FeaturedProject project={OurProjects[3]} />
    </div>
}


export default ProjectSection;