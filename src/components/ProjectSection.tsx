import { ProjectSectionDiv } from "./ProjectSection.styles";
import { PastProjects } from "ProjectData";
import FeaturedProject from "./FeaturedProject";

const ProjectSection = () => (
  <ProjectSectionDiv>
    {PastProjects.map((project) => {
      return (
        <FeaturedProject
          image={project.image}
          github={project.github}
          description={project.description}
          key={project.id}
        />
      );
    })}
  </ProjectSectionDiv>
);

export default ProjectSection;
