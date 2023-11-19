import React from "react";
import * as S from "./MerchSection.styles";
import MerchCollection from "./Merch";
import { merchList } from "./MerchData";
import useViewport from "components/UseViewport";

const MerchSection = () => {
  const { width } = useViewport();
  const defaultView = width > 600 ? true : false;

  const getMerch = () => {
    return merchList;
  };

  return (
    <S.MerchSection data-aos="fade-up" >
      <MerchCollection merchItems={getMerch()} desktopView={defaultView} />
    </S.MerchSection>
  );
};

export default React.memo(MerchSection);
