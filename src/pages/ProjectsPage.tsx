import * as S from "./ProjectsPage.styles";
import Lottie from "react-lottie";
import teamproject from "../images/lottie/teamproject.json";
import { motion } from "framer-motion/dist/framer-motion";
import ProjectSection from "components/ProjectSection";
import Divider from "components/Divider";

const ProjectsPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: teamproject,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.ProjectsPage id="projectsPageTop">
      <S.ProjectsPageHeader>
        <S.ProjectsPageHeaderItem>
          <Lottie
            options={defaultOptions}
            height={"35vw"}
            width={"35vw"}
            style={{ margin: "0px 0px 0px 25%" }}
          />
        </S.ProjectsPageHeaderItem>
        <S.ProjectsPageHeaderItem>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our <br></br>Projects
          </motion.h1>
        </S.ProjectsPageHeaderItem>
      </S.ProjectsPageHeader>
      <h2 className="chonkyHeading chonkyHeading--lessMargin">Past Projects</h2>
      <Divider />
      <ProjectSection />
    </S.ProjectsPage>
  );
};

export default ProjectsPage;
