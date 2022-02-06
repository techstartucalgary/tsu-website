import { ProjectSectionDiv } from "./ProjectSection.styles";
import { Project } from "ProjectData";
import FeaturedProject from "./FeaturedProject";

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

const ProjectSection = (props: ProjectSectionProps) => (
  <ProjectSectionDiv>
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-50-px"
    >
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
    </Carousel>
  </ProjectSectionDiv>
);

export default ProjectSection;
