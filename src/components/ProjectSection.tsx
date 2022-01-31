import { ProjectSectionDiv } from "./ProjectSection.styles";
import { Project } from "ProjectData";
import FeaturedProject from "./FeaturedProject";

type ProjectSectionProps = {
  projects: Project[];
};

const ProjectSection = (props: ProjectSectionProps) => (
  <ProjectSectionDiv>
    {props.projects.map((project) => {
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
