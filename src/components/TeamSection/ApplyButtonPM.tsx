import React from "react";
import { Link } from "react-router-dom";

import "./ApplyButtonPM.css";

function ApplyButtonPM() {
  return (
    <div className="homePage__applyButtonPMBox">
      <Link to="/apply" className="homePage__applyButtonLink">
        <div className="homePage__applyButtonPM">
          <div className="homePage__applyButtonPMText"> Join now!</div>
        </div>
      </Link>
    </div>
  );
}

export default ApplyButtonPM;
