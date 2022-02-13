import * as S from "./ProjectsPage.styles";
import Lottie from "react-lottie";
import { teamProjectLottieOptions } from "utility/LottieOptions";
import { motion } from "framer-motion/dist/framer-motion";
import { CurrentProjects, PastProjects } from "ProjectData";
import ProjectSection from "components/ProjectSection";
import Divider from "components/Divider";
import ProjectKeywordsSection from "components/ProjectKeywordsSection";
import { NewlineText } from "utility/Helpers";

const ProjectsPage = () => {
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
            {NewlineText("Our\nProjects")}
          </motion.div>
        </S.ProjectsPageHeaderItem>
      </S.ProjectsPageHeader>

      <h2
        className="thiccSubheading thiccSubheading--gradient"
        style={{ textAlign: "center" }}
      >
        Check out cool things our project teams do!
      </h2>
      <ProjectKeywordsSection />

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
