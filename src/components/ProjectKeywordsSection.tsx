import * as S from "./ProjectKeywordsSection.styles";
import { NewlineText } from "utility/Helpers";
import Lottie from "react-lottie";
import {
  businessStrategyLottieOptions,
  designLottieOptions,
  programmingLottieOptions,
  projectManagementLottieOptions,
  requirementsEngineeringLottieOptions,
} from "utility/LottieOptions";
import useViewport from "./UseViewport";

const ProjectKeywordsSection = () => {
  const lottieDiv = (options: any) => (
    <S.LottieDiv data-aos="fade-left" data-aos-duration="800">
      <Lottie options={options} />
    </S.LottieDiv>
  );

  const projectKeyword = (keyword: JSX.Element[]) => (
    <S.Keyword
      className="babyHeading babyHeading--white"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      {keyword}
    </S.Keyword>
  );

  const { width } = useViewport(); // get screen width

  return (
    <S.ProjectKeywordsSectionDiv>
      {width > 1000 ? (
        <div>
          <S.GridItem>
            {projectKeyword(NewlineText("Business\nStrategy"))}
            {lottieDiv(businessStrategyLottieOptions)}
          </S.GridItem>

          <S.GridItem>
            {projectKeyword(NewlineText("Design"))}
            {lottieDiv(designLottieOptions)}
          </S.GridItem>

          <S.GridItem>
            {projectKeyword(NewlineText("Programming"))}
            {lottieDiv(programmingLottieOptions)}
          </S.GridItem>

          <S.GridItem>
            {projectKeyword(NewlineText("Project\nManagement"))}
            {lottieDiv(projectManagementLottieOptions)}
          </S.GridItem>

          <S.GridItem>
            {projectKeyword(NewlineText("Requirements\nEngineering"))}
            {lottieDiv(requirementsEngineeringLottieOptions)}
          </S.GridItem>
        </div>
      ) : (
        <div>
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
        </div>
      )}
    </S.ProjectKeywordsSectionDiv>
  );
};

export default ProjectKeywordsSection;
