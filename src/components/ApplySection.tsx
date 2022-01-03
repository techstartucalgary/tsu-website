import React from "react";
import "./ApplySection.css";

function ApplySection(props: any) {
  return (
    <article className="applyPage__applicationContent" data-aos="fade-down">
      <li>
        <h3>{props.term}</h3>
        <h2>{props.role}</h2>
        <p>{props.description}</p>
      </li>
      {props.status === "open" ? (
        <a href={props.applicationLink} target="_blank">
          <button className="applyPage__btn">Apply Now</button>
        </a>
      ) : (
        <h4 className="applyPage__closed">{props.closedStatus}</h4>
      )}
    </article>
  );
}
export default ApplySection;
