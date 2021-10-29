import React from "react";
import { Link } from "react-router-dom";
import ApplySection from "./ApplySection";
import "./ApplyButton.css";

function ApplyButton() {
  return (
    <div className="homePage__applyButtonBox">
      <Link to="/apply" className="homePage__applyButtonLink">
        <div className="homePage__applyButton">
          <div className="homePage__applyButtonArrow">
            {" "}
            <span>&#62;</span>
            <span>&#62;</span>{" "}
          </div>
          <div className="homePage__applyButtonText"> theTeam.join()</div>
        </div>
      </Link>
    </div>
  );
}

export default ApplyButton;
