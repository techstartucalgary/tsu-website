import React from "react";
import * as S from "./MerchItem.styles";
import { MerchComponents } from "./MerchData";
import MerchDescription from "./MerchDescription";

type MerchItemProps = {
  key: number;
  member: MerchComponents;
  mobileView: boolean;
  profilePic: string;
};

const MerchItem = (props: MerchItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const preventDragHandler = (e: any) => e.preventDefault();

  return (
    <S.MerchItemDiv
      data-aos={!props.mobileView && "zoom-in"}
      data-aos-duration={!props.mobileView && "1000"}
      mobileView={props.mobileView}
    >
      <S.MerchItemIconDiv>
        <img
          src={props.profilePic}
          key={props.key}
          onDragStart={preventDragHandler}
        />
      </S.MerchItemIconDiv>

      <MerchDescription item={props.member.item} price={props.member.price} />
    </S.MerchItemDiv>
  );
};

export default React.memo(MerchItem);
