import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";
import Lottie from "react-lottie";
import Divider from "components/Divider";
import * as S from "./ProjectsSection.styles";
import useViewport from "../../components/UseViewport";
import { projectTeamLottieOptions } from "utility/LottieOptions";

/* Projects section on the homepage */
export const ProjectsSection = () => {
  const { width } = useViewport(); // get screen width

  return (
    <S.ProjectsSection id="projects">
      {width > 1200 ? (
        <div className="homePage__container">
          <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
            Tech Start Projects
          </h1>
          <Divider />
          <S.ProjectDescriptionDiv>
            <S.ProjectsSectionItem>
              <p className="regularText regularText--white">
                Every year, Tech Start runs a handful of year-long software
                development projects, each led by an experienced project
                manager. Each project aims to solve a compelling problem by
                harnessing technology and entrepreneurial principles. Our
                members participate in every stage of the software development
                lifecycle, and each team involves a diversity of roles like
                software developers, business strategists, and designers.
                <br />
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
            Tech Start Projects
          </h1>
          <Divider />
          <S.LottieDiv>
            <Lottie options={projectTeamLottieOptions} />
          </S.LottieDiv>
          <p className="regularText regularText--white">
            Every year, Tech Start runs a handful of year-long software
            development projects, each led by an experienced project manager.
            Each project aims to solve a compelling problem by harnessing
            technology and entrepreneurial principles. Our members participate
            in every stage of the software development lifecycle, and each team
            involves a diversity of roles like software developers, business
            strategists, and designers.
            <br />
            <br />
            At the end of the year, teams present their finished projects to our
            sponsors at our annual showcase, and members can add their project
            to their portfolio to supercharge their career prospects. Joining a
            Tech Start project is the best way to gain skills, meet friends, and
            network with the tech community on campus.
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
