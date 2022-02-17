import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";
import Lottie from "react-lottie";
import projectTeamLottie from "../images/lottie/projectTeamLottie.json";
import Divider from "components/Divider";
import * as S from "./ProjectsSection.styles";
import useViewport from "../components/UseViewport";

export const ProjectsSection = () => {
  const { width } = useViewport(); // get screen width

  const projectTeamLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: projectTeamLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.ProjectsSection>
      {width > 1000 ? (
        <div className="homePage__container">
          <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
            Tech Start Projects
          </h1>
          <Divider />
          <S.ProjectDescriptionDiv>
            <S.ProjectsSectionItem>
              <p className="regularText regularText--white" id="draft">
                Every year, Tech Start runs a handful of year-long software
                development projects, each led by an experienced project
                manager. Each project aims to solve a compelling problem by
                harnessing technology and entrepreneurial principles. Our
                members participate in every stage of the software development
                lifecycle, and each team involves a diversity of roles like
                software developers, business strategists, and designers.
              </p>
              <p className="regularText regularText--white" id="draft"></p>
              <p className="regularText regularText--white" id="draft">
                <br />
                At the end of the year, teams present their finished projects to
                our sponsors at our annual showcase, and members can add their
                project to their portfolio to supercharge their career
                prospects. Joining a Tech Start project is the best way to gain
                skills, meet friends, and network with the tech community on
                campus.
              </p>

              <S.projectButtonDiv>
                <HoverButton
                  mode={ButtonMode.GRADIENT}
                  glowOnHover={true}
                  link={"/projects"}
                  text={"Check out our projects!"}
                  linkIsInternal={true}
                />
              </S.projectButtonDiv>
            </S.ProjectsSectionItem>
            <S.ProjectsSectionItem>
              <S.LottieDiv>
                <Lottie
                  options={projectTeamLottieOptions}
                  style={{ marginLeft: "5vw" }}
                />
              </S.LottieDiv>
            </S.ProjectsSectionItem>
          </S.ProjectDescriptionDiv>
        </div>
      ) : (
        <div className="homePage__container">
          <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
            TechStart Projects
          </h1>
          <Divider />
          <S.LottieDiv>
            <Lottie options={projectTeamLottieOptions} />
          </S.LottieDiv>
          <p className="regularText regularText--white" id="draft">
            Our members form teams that gather together to brainstorm a project,
            and then work on that idea collaboratively with 6~9 other creators
            over the year. During this time, the projects evolve and shift, and
            our members get to experience the full lifecycle of bringing a
            complex idea to life. Each project team consists of software
            developers, business strategist, project designer, and a project
            manager.
          </p>
          <S.projectButtonDiv>
            <HoverButton
              mode={ButtonMode.GRADIENT}
              link={"/projects"}
              text={"Check out our projects!"}
              linkIsInternal={true}
            />
          </S.projectButtonDiv>
        </div>
      )}
    </S.ProjectsSection>
  );
};
