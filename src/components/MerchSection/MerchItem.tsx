import React, { useState } from "react";
import * as S from "./MerchItem.styles";
import { MerchComponents } from "./MerchData";
import MerchDescription from "./MerchDescription";
import { useHistory } from "react-router";

export type MerchItemProps = {
  member: MerchComponents;
  mobileView: boolean;
  profilePic: string;
};

const MerchItem = (props: MerchItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const preventDragHandler = (e: any) => e.preventDefault();
  const history = useHistory();

  return (
    <>
      <S.MerchItemDiv
        data-aos={!props.mobileView && "zoom-in"}
        data-aos-duration={!props.mobileView && "1000"}
        mobileView={props.mobileView}
        onClick={() => history.push(`/merch/item/${props.member.id}`)}
      >
        <S.MerchItemIconDiv>
          <img
            src={props.profilePic}
            key={props.member.id}
            onDragStart={preventDragHandler}
          />
        </S.MerchItemIconDiv>

        <MerchDescription item={props.member.item} price={props.member.price} />
      </S.MerchItemDiv>
    </>
  );
};

export default React.memo(MerchItem);
