import React from "react";
import * as S from "./MerchItem.styles";
import { type MerchProperties } from "./MerchData";
import MerchDescription from "./MerchDescription";
import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";

export type MerchItemProps = {
  merch: MerchProperties;
  mobileView: boolean;
  image: string;
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
          src={props.image}
          key={props.merch.id}
          onDragStart={preventDragHandler}
        />
      </S.MerchItemIconDiv>

      <MerchDescription item={props.merch.item} price={props.merch.price} />
      <HoverButton
        mode={ButtonMode.GRADIENT}
        text={"Buy Now"}
        link="https://docs.google.com/forms/d/e/1FAIpQLSfpXS4hisen7IBvMGZnrfYWH600W_vpJwW0-b7blsA-D5Dq2w/viewform"
        linkIsInternal={false}
      />
    </S.MerchItemDiv>
  );
};

export default React.memo(MerchItem);
