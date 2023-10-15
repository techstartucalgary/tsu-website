import React from "react";
import { FounderInfo } from "./FounderInformation";
import FounderProfile from "./FounderProfile";
import * as S from "../TeamSection/Team.styles"
import "../TeamSection/Team.styles.ts";

type FounderProps = {
  founderInfo: FounderInfo[];
  desktopView: boolean;
};
const Founder = (props: FounderProps) => {
  return (
    <S.TeamContainer mobileView={!props.desktopView}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {props.founderInfo.map((member: any) => {
        return (
          <FounderProfile
            key={member.id}
            member={member}
            profilePic={member.image}
            alt={member.image}
            mobileView={!props.desktopView}
          />
        );
      })}
    </S.TeamContainer>
  );
};

export default React.memo(Founder);
