import React from "react";
import * as S from "./MerchSection.styles";
import MerchTeamPhoto from "../../images/merch/MerchTeamPhoto.jpeg";

const MerchSection = () => {
  // const { width } = useViewport();
  // const defaultView = width > 600 ? true : false;

  // const getMerch = () => {
  //   return merchList;
  // };

  return (
    <S.MerchSection data-aos="fade-up" >
      <img src={MerchTeamPhoto} alt="Tech Start Execs Merch Photo" />
      <h1 style={{ fontFamily: "consolas" }}>STAY TUNED</h1>
      {/* <MerchCollection merchItems={getMerch()} desktopView={defaultView} /> */}
    </S.MerchSection>
  );
};

export default React.memo(MerchSection);
