import * as S from "./FeaturedProjectSection.styles";
import { Project } from "components/ProjectSection/ProjectData";
import FeaturedProject from "../FeaturedProject";

import "react-multi-carousel/lib/styles.css";

type FeaturedProjectSectionProps = {
    featuredProjects: Project[];
};

/* Project section on the Projects page */
const FeaturedProjectSection = (props: FeaturedProjectSectionProps) => {

    return (
        <S.FeaturedProjectSectionDiv>
            {props.featuredProjects.map((project) => (
                <FeaturedProject
                    image={project.image}
                    github={project.github}
                    name={project.name}
                    description={project.description}
                    key={project.id}
                    year={project.year}
                />
            ))}
        </S.FeaturedProjectSectionDiv>
    );
};

export default FeaturedProjectSection;
