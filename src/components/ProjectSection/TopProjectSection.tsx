import * as S from "./TopProjectSection.styles";
import { Project } from "components/ProjectSection/ProjectData";
import TopProject from "../TopProject";

import "react-multi-carousel/lib/styles.css";

type TopProjectSectionProps = {
    topProjects: Project[];
};

/* Project section on the Projects page */
const TopProjectSection = (props: TopProjectSectionProps) => {

    return (
        <S.TopProjectSectionDiv>
            {props.topProjects.map((project) => (
                <TopProject
                    image={project.image}
                    github={project.github}
                    name={project.name}
                    description={project.description}
                    key={project.id}
                    year={project.year}
                />
            ))}
        </S.TopProjectSectionDiv>
    );
};

export default TopProjectSection;
