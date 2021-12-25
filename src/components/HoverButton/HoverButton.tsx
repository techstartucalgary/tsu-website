import React from "react";
import * as S from "./HoverButton.styles";

type HoverButtonProps = {
  darkMode: boolean;
  link: string;
  text: string;
};

const HoverButton = (props: HoverButtonProps) => {
  return (
    <S.HoverButtonDiv>
      <S.HoverButton
        href={props.link}
        darkMode={props.darkMode}
        target="_blank"
        rel="noreferrer"
      >
        {props.text}
      </S.HoverButton>
    </S.HoverButtonDiv>
  );
};

export default React.memo(HoverButton);
