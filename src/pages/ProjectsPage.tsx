import * as S from "./ProjectsPage.styles";
import Lottie from "react-lottie";
import { teamProjectLottieOptions } from "utility/LottieOptions";
import { motion } from "framer-motion";
import {
  CurrentProjects,
  PastProjects,
} from "components/ProjectSection/ProjectData";
import ProjectSection from "components/ProjectSection/ProjectSection";
import Divider from "components/Divider";
import ProjectKeywordsSection from "components/ProjectSection/ProjectKeywordsSection";
import { NewlineText } from "utility/Helpers";
import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";

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
            {NewlineText("Our \nProjects")}
          </motion.div>
        </S.ProjectsPageHeaderItem>
      </S.ProjectsPageHeader>

      <div data-aos="fade-up" data-aos-duration="800">
        <h2
          className="thiccSubheading thiccSubheading--gradient"
          style={{ textAlign: "center", marginBottom: "2%" }}
        >
          From Ideation to Implementation
        </h2>
        <h3
          className="regularText--white"
          style={{ textAlign: "center", marginBottom: "3%" }}
        >
          Explore the diverse talents of our community, and witness innovation
          in action. <br></br> Have an idea for a cool project you'd like to
          bring to life with Tech Start?
        </h3>
        <S.IdeaSubmitButtonDiv>
          <HoverButton
            mode={ButtonMode.GRADIENT}
            text={"Share your Idea!"}
            link="https://forms.gle/ErpgSLjsUvEoKn6YA"
            linkIsInternal={false}
          />
        </S.IdeaSubmitButtonDiv>
      </div>

      <ProjectKeywordsSection />
      <h2
        className="gradient-text"
        style={{ textAlign: "center", marginBottom: "7%" }}
      >
        Have an idea for a project? Apply to be a Project Manager{" "}
        {<a href="/apply">HERE</a>}!
      </h2>
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
