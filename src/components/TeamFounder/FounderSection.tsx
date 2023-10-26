import React from "react";
import { founder } from "../TeamSection/TeamInformation"
import useViewport from "../UseViewport";
import * as F from "./FounderSection.styles";
import "../../App.css";

const FounderSection = () => {

  const { width } = useViewport(); // get screen width
  const defaultView = width > 600 ? true : false;
  return (
    <F.FounderContainer mobileView={!defaultView}>

      <F.FounderImageContainer>
        <F.FounderImg src={founder.image} />
      </F.FounderImageContainer>
      <div className="regularText--white" >
        <span style={{ fontWeight: "bold", fontSize: "30px" }}>{founder.name}</span><br />
        <span style={{ fontStyle: "italic" }}>{founder.affiliation}</span><br /><br />
        {founder.description}<br />
      </div >
    </F.FounderContainer>
  );
};

export default React.memo(FounderSection);