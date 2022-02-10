import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";
import Lottie from "react-lottie";
import rocket from "../images/lottie/rocket.json";
import Divider from "components/Divider";
import * as S from "./ProjectsSection.styles";
import useViewport from "../components/UseViewport";

export const ProjectsSection = () => {
  const { width } = useViewport(); // get screen width

  const rocketLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: rocket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.ProjectsSection>
      {width > 750 ? (
        <div className="homePage__container">
          <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
            TechStart Projects
          </h1>
          <Divider />
          <S.projectDescriptionDiv>
            <div style={{ marginLeft: "5vw" }}>
              <p className="regularText regularText--white" id="draft">
                Our members form teams that gather together to brainstorm a
                project, and then work on that idea collaboratively with 6~9
                other creators over the year. During this time, the projects
                evolve and shift, and our members get to experience the full
                lifecycle of bringing a complex idea to life. Each project team
                consists of software developers, business strategist, project
                designer, and a project manager.
              </p>
            </div>
            <div />
          </S.projectDescriptionDiv>
          <S.projectButtonLottieDiv>
            <S.projectButtonDiv>
              <HoverButton
                mode={ButtonMode.GRADIENT}
                glowOnHover={true}
                link={"/projects"}
                text={"Check out our projects!"}
                linkIsInternal={true}
              />
            </S.projectButtonDiv>
            <div style={{ width: "25vw", height: "25vw" }}>
              <Lottie
                options={rocketLottieOptions}
                style={{ marginLeft: "10vw" }}
              />
            </div>
          </S.projectButtonLottieDiv>
        </div>
      ) : (
        <div className="homePage__container">
          <h1 className="chonkyHeading chonkyHeading--white chonkyHeading--lessMargin">
            TechStart Projects
          </h1>
          <Divider />
          <Lottie
            options={rocketLottieOptions}
            style={{ marginBottom: "10vw" }}
          />

          <p className="regularText regularText--white" id="draft">
            Our members form teams that gather together to brainstorm a project,
            and then work on that idea collaboratively with 6~9 other creators
            over the year. During this time, the projects evolve and shift, and
            our members get to experience the full lifecycle of bringing a
            complex idea to life. Each project team consists of software
            developers, business strategist, project designer, and a project
            manager.
          </p>
          <S.projectButtonDiv_centered>
            <HoverButton
              mode={ButtonMode.GRADIENT}
              glowOnHover={true}
              link={"/projects"}
              text={"Check out our projects!"}
              linkIsInternal={true}
            />
          </S.projectButtonDiv_centered>
        </div>
      )}
    </S.ProjectsSection>
  );
};
