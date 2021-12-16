import "./ApplyFAQSection.css";

type ApplyFAQSectionProps = {
  question: string;
  answer: string;
};

const ApplyFAQSection = (props: ApplyFAQSectionProps) => (
  <article className="applyPage_FAQSection" data-aos="fade-right">
    <h2 className="applyPage__FAQQuestion"> {props.question}</h2>
    <p className="applyPage__FAQAnswer"> {props.answer}</p>
  </article>
);

export default ApplyFAQSection;
