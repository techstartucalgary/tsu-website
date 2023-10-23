import React from "react";
import { founder } from "../TeamSection/TeamInformation"
import useViewport from "../UseViewport";
import * as F from "./FounderSection.styles";
import  "../../App.css";

const FounderSection = () => {

  const { width } = useViewport(); // get screen width
  const defaultView = width > 600 ? true : false;
  return (
    <F.FounderContainer mobileView={!defaultView}>

      <F.FounderImageContainer>
        <F.FounderImg src={founder.image} />
      </F.FounderImageContainer>
      <p className="regularText--white" >
        {founder.name}<br />
        {founder.affiliation}<br /><br />
        {founder.description}<br />
    </p >
    </F.FounderContainer>
  );
};

export default React.memo(FounderSection);