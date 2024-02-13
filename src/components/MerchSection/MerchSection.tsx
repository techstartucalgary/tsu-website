import React from "react";
import * as S from "./MerchSection.styles";
import MerchCollection from "./MerchCollection";
import Divider from "components/Divider";
import { merchList } from "./MerchData";
import useViewport from "components/UseViewport";

const MerchSection = () => {
  const { width } = useViewport();
  const defaultView = width > 600 ? true : false;

  return (
    <S.MerchSection data-aos="fade-up" >
      <MerchCollection merchItems={merchList} desktopView={defaultView} />
      <h1 className="chonkyHeading chonkyHeading--black chonkyHeading--lessMargin">
            Merch Gallery
          </h1>
      <Divider />
    </S.MerchSection>
    
  );
};

export default React.memo(MerchSection);
