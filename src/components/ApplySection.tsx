import React from "react";
import "./ApplySection.css";

function ApplySection(props: any) {
  return (
    <article className="applyPage__applicationContent" data-aos="fade-down">
        <li>
          <h3>({props.term})</h3>
          <h2>{props.role}</h2>
          <p>{props.description}</p>
        </li>
        <a href={props.link}>
          <button className="applyPage__btn">Apply Now</button>
        </a>
    </article>
  );
}
export default ApplySection;
