import React from "react";
import { founder } from "./FounderInformation";
// import FounderProfile from "./FounderPro file";
import Profile  from "components/TeamSection/Profile";
import * as S from "../TeamSection/Team.styles";
import * as T from "../TeamSection/TeamSection.styles";
import useViewport from "../UseViewport";


const FounderSection = () => {

  const { width } = useViewport(); // get screen width
  const defaultView = width > 600 ? true : false;
  return (
    <T.TeamSection>
      <S.TeamContainer mobileView={!defaultView}>
        <Profile
          key={founder.id}
          member={founder}
          profilePic={founder.image}
          alt={founder.image}
          mobileView={!defaultView}
        />
      </S.TeamContainer>
    </T.TeamSection>
  );
};

export default React.memo(FounderSection);