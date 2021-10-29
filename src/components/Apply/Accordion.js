import React, { useState } from "react";
import "./Accordion.css";

const Accordion = (props) => {
  return (
    <div className="applyPage__accordion">
      <div
        className="applyPage__accordionHeading"
        onClick={() =>
          props.active === props.title
            ? props.setActive("")
            : props.setActive(props.title)
        }
      >
        <div className="applyPage__accordionContainer">
          <p>{props.title}</p>
          <span>{props.active === props.title ? "+" : "-"}</span>
        </div>
      </div>
      <div
        className={
          (props.active === props.title ? "applyPage__accordionShow" : "") +
          " applyPage__accordionContent"
        }
      >
        <div className="applyPage__accordionContainer">
          <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
