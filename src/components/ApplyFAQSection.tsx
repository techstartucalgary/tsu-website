import * as S from "./ApplyFAQSection.styles";

type ApplyFAQSectionProps = {
  question: string;
  answer: string;
};

const ApplyFAQSection = (props: ApplyFAQSectionProps) => (
  <S.FAQSection data-aos="fade-right" data-aos-duration="1000">
    <S.FAQQuestion> {props.question}</S.FAQQuestion>
    <S.FAQAnswer> {props.answer}</S.FAQAnswer>
  </S.FAQSection>
);

export default ApplyFAQSection;
