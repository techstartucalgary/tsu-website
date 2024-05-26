import * as S from "./ProjectSection.styles";
import { Project } from "components/ProjectSection/ProjectData";
import Projects from "../Projects";
import useViewport from "../UseViewport";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type ProjectSectionProps = {
  projects: Project[];
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 900 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

/* Project section on the Projects page */
const ProjectSection = (props: ProjectSectionProps) => {
  const { width } = useViewport(); // get screen width

  return (
    <S.ProjectSectionDiv>
      {width < 1055 ? (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-50-px"
        >
          {props.projects.map((project, index) => {
            return (
              <Projects
                image={project.image}
                github={project.github}
                name={project.name}
                description={project.description}
                key={index}
              />
            );
          })}
        </Carousel>
      ) : (
        props.projects.map((project, index) => {
          return (
            <Projects
              image={project.image}
              github={project.github}
              name={project.name}
              description={project.description}
              key={index}
            />
          );
        })
      )}
    </S.ProjectSectionDiv>
  );
};

export default ProjectSection;
