import React from "react";
import { useState } from "react";
import MerchCollection from "./Merch";
import useViewport from "../UseViewport";
import * as S from "./MerchSection.styles";
import { merchList } from "./MerchData";
import MerchTeamPhoto from "../../images/merch/MerchTeamPhoto.jpeg";

const MerchSection = () => {
  const { width } = useViewport();
  let defaultView = width > 600 ? true : false;

  const getMerch = () => {
    return merchList;
  };

  return (
    <S.MerchSection>
      <img src={MerchTeamPhoto} alt="Tech Start Execs Merch Photo" />
      <MerchCollection merchItems={getMerch()} desktopView={defaultView} />
    </S.MerchSection>
  );
};

export default React.memo(MerchSection);
