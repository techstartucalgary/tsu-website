import React from "react";
import "./ApplyFAQSection.css";

function ApplyFAQSection(props: any) {
  return (
    <article className="applyPage_FAQSection" data-aos="fade-down">
      <h2 className="applyPage__FAQQuestion"> {props.question}</h2>
      <p className="applyPage__FAQAnswer"> {props.answer}</p>
    </article>
  );
}
export default ApplyFAQSection;
