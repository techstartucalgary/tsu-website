import * as S from "./ProjectsPage.styles";
import Lottie from "react-lottie";
import { teamProjectLottieOptions } from "utility/LottieOptions";
import { motion } from "framer-motion";
import { PastProjects } from "components/ProjectSection/ProjectData";
import ProjectSection from "components/ProjectSection/ProjectSection";
import Divider from "components/Divider";
import ProjectKeywordsSection from "components/ProjectSection/ProjectKeywordsSection";
import { NewlineText } from "utility/Helpers";
import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";
import WinningTeamPhoto from "../images/final_showcase_winner.jpg";

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

      <h2
        className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin"
        style={{ marginTop: "0px" }}
      >
        Final Showcase 2023
      </h2>
      <Divider />
      <S.FinalShowcaseWinnerSection>
        <div data-aos="fade-up" data-aos-duration="800">
          <h2
            className="thiccSubheading thiccSubheading--gradient"
            style={{ textAlign: "center" }}
          >
            Best Overall Project
          </h2>
          <div data-aos="flip-left"></div>
          <S.FinalShowcaseWinnerDescription>
            <span>
              <h1
                className="babyHeading--white"
                style={{ textAlign: "left", marginBottom: "3%" }}
              >
                Congratulations EasyMeal!
              </h1>
              <p className="regularText regularText--white">
                On April 29th, 2023, EasyMeal was awarded the title of Best
                Overall Project at the Tech Start Final Showcase. The project
                group achieving the award for Best Overall Project is recognized
                for receiving the highest overall points in the 4 judging
                categories listed as follows:
                <ul>
                  <li> Technical Functionality </li>
                  <li> User Friendliness </li>
                  <li> Presentation Quality </li>
                  <li> Business & Strategy </li>
                </ul>
              </p>
              <S.FinalShowcaseWinnerLinkedInButtonDiv>
                <HoverButton
                  mode={ButtonMode.GRADIENT}
                  text={"Learn More"}
                  link="https://www.linkedin.com/feed/update/urn:li:activity:7058573838405550080?utm_source=share&utm_medium=member_desktop"
                  linkIsInternal={false}
                />
              </S.FinalShowcaseWinnerLinkedInButtonDiv>
            </span>
            <S.FinalShowcaseWinnerImage>
              <div data-aos="flip-left">
                <img src={WinningTeamPhoto} alt="Easy Meal Team" />
              </div>
            </S.FinalShowcaseWinnerImage>
          </S.FinalShowcaseWinnerDescription>
        </div>
      </S.FinalShowcaseWinnerSection>

      <div data-aos="fade-up" data-aos-duration="800">
        <h2
          className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin"
          style={{ textAlign: "center" }}
        >
          From Ideation to Implementation
        </h2>
        <Divider />
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

      <h2 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
        Past Projects
      </h2>
      <Divider />
      <ProjectSection projects={PastProjects} />
    </S.ProjectsPage>
  );
};

export default ProjectsPage;
