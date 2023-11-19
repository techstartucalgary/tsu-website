import React from "react";
import MerchItem from "./MerchItem";
import * as S from "./Merch.styles";
import { MerchComponents } from "./MerchData";

type MerchProps = {
  merchItems: MerchComponents[];
  desktopView: boolean;
};
const Merch = (props: MerchProps) => {
  return (
    <S.MerchContainer mobileView={!props.desktopView}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {props.merchItems.map((member: any, index: number) => {
        return (
          <MerchItem
            key={index}
            member={member}
            profilePic={member.image}
            mobileView={!props.desktopView}
          />
        );
      })}
    </S.MerchContainer>
  );
};

export default React.memo(Merch);
