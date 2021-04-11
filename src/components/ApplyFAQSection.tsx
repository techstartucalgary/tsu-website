import React from "react";
import "./ApplyFAQSection.css";

function ApplyFAQSection(props: any) {
  return (
    <article className="applyPage_FAQSection" data-aos="fade-right">
      <h2 className="applyPage__FAQQuestion"> {props.question}</h2>
      <p className="applyPage__FAQAnswer"> {props.answer}</p>
      <p className="applyPage__FAQAnswer"> {props.extraAnswer}</p>
    </article>
  );
}
export default ApplyFAQSection;
