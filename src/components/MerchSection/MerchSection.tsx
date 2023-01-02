import React from "react";
import { useState } from "react";
import MerchCollection from "./Merch";
import useViewport from "../UseViewport";
import * as S from "./MerchSection.styles";
import { merchList } from "./MerchData";

const MerchSection = () => {
  const { width } = useViewport();
  let defaultView = width > 600 ? true : false;

  const getMerch = () => {
    return merchList;
  };

  return (
    <S.MerchSection>
      <MerchCollection merchItems={getMerch()} desktopView={defaultView} />
    </S.MerchSection>
  );
};

export default React.memo(MerchSection);
