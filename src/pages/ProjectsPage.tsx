import * as S from "./ProjectsPage.styles";
import Lottie from "react-lottie";
import teamproject from "../images/lottie/teamproject.json";
import { motion } from "framer-motion/dist/framer-motion";
import { CurrentProjects, PastProjects } from "ProjectData";
import ProjectSection from "components/ProjectSection";
import Divider from "components/Divider";

const ProjectsPage = () => {
  const teamProjectLottieOptions = {
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
          <S.LottieDiv>
            <Lottie options={teamProjectLottieOptions} />
          </S.LottieDiv>
        </S.ProjectsPageHeaderItem>
        <S.ProjectsPageHeaderItem>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>Our </h1>
            <h1>Projects</h1>
          </motion.div>
        </S.ProjectsPageHeaderItem>
      </S.ProjectsPageHeader>
      <h2 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
        Current Projects
      </h2>
      <Divider />
      <ProjectSection projects={CurrentProjects} />

      <h2 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
        Past Projects
      </h2>
      <Divider />
      <ProjectSection projects={PastProjects} />
    </S.ProjectsPage>
  );
};

export default ProjectsPage;
