import React from "react";
import { Link } from "react-router-dom";
import * as S from "./HoverButton.styles";

type HoverButtonProps = {
  mode: S.ButtonMode;
  glowOnHover?: boolean;
  link: string;
  text: string;
  linkIsInternal: boolean;
};

const HoverButtonComponent = (props: HoverButtonProps) => (
  <S.HoverButton
    mode={props.mode}
    glowOnHover={props.glowOnHover}
    target="_blank"
    rel="noreferrer"
    href={!props.linkIsInternal ? props.link : ""}
  >
    {props.text}
  </S.HoverButton>
);

const HoverButton = (props: HoverButtonProps) => {
  if (props.linkIsInternal) {
    return (
      <S.HoverButtonDiv>
        <Link to={props.link}>{HoverButtonComponent(props)}</Link>
      </S.HoverButtonDiv>
    );
  }
  return <S.HoverButtonDiv>{HoverButtonComponent(props)}</S.HoverButtonDiv>;
};

export default React.memo(HoverButton);
