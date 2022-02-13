import * as S from "./ProjectKeywordsSection.styles";
import businessStrategyLottie from "../images/lottie/businessStrategy_lottie.json";
import designLottie from "../images/lottie/design_lottie.json";
import programmingLottie from "../images/lottie/programming_lottie.json";
import projectManagementLottie from "../images/lottie/projectManagement_lottie.json";
import requirementsEngineeringLottie from "../images/lottie/requirementsEngineering_lottie.json";
import Lottie from "react-lottie";

const ProjectKeywordsSection = () => {
  const businessStrategyLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: businessStrategyLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const designLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: designLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const programmingLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: programmingLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const projectManagementLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: projectManagementLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const requirementsEngineeringLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: requirementsEngineeringLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lottieDiv = (options: any) => (
    <S.LottieDiv data-aos="fade-left" data-aos-duration="1000">
      <Lottie options={options} />
    </S.LottieDiv>
  );

  const projectKeyword = (keyword: JSX.Element[]) => (
    <h3
      className="babyHeading babyHeading--white"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      {keyword}
    </h3>
  );

  const NewlineText = (text: string) => {
    const oldText = text;
    const newText = oldText.split("\n").map((str) => <p>{str}</p>);

    return newText;
  };

  return (
    <S.ProjectKeywordsSectionDiv>
      {projectKeyword(NewlineText("Business\nStrategy"))}
      {lottieDiv(businessStrategyLottieOptions)}

      {projectKeyword(NewlineText("Design"))}
      {lottieDiv(designLottieOptions)}

      {projectKeyword(NewlineText("Programming"))}
      {lottieDiv(programmingLottieOptions)}

      {projectKeyword(NewlineText("Project\nManagement"))}
      {lottieDiv(projectManagementLottieOptions)}

      {projectKeyword(NewlineText("Requirements\nEngineering"))}
      {lottieDiv(requirementsEngineeringLottieOptions)}
    </S.ProjectKeywordsSectionDiv>
  );
};

export default ProjectKeywordsSection;
