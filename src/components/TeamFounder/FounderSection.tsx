import React from "react";
import { founder } from "../TeamSection/TeamInformation"
import * as S from "../TeamSection/Team.styles";
import useViewport from "../UseViewport";
import * as F from "./FounderSection.styles";

const FounderSection = () => {

  const { width } = useViewport(); // get screen width
  const defaultView = width > 600 ? true : false;
  return (
    <F.FounderContainer mobileView={!defaultView}>

      <F.FounderImageContainer>
        <F.FounderImg src={founder.image} />
      </F.FounderImageContainer>
      <F.Paragraph >
        {founder.name}<br />
        {founder.affiliation}<br /><br />
        {founder.description}<br />
      </F.Paragraph>
    </F.FounderContainer>
  );
};

export default React.memo(FounderSection);