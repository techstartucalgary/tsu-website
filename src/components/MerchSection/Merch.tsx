import React from "react";
import MerchItem from "./MerchItem";
import * as S from "./Merch.styles";
import "./Merch.styles.ts";
import { MerchComponents } from "./MerchData";

type MerchProps = {
  merchItems: MerchComponents[];
  desktopView: boolean;
};
const Merch = (props: MerchProps) => {
  return (
    <S.MerchContainer mobileView={!props.desktopView}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {props.merchItems.map((member: any) => {
        return (
          <MerchItem
            key={member.id}
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
