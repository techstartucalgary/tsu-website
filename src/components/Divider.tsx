import dividerIMG from "images/divider.svg";
import * as S from "./Divider.styles";
function Divider() {
  return (
    <S.DividerDiv>
      <S.DividerGradient src={dividerIMG} alt="gradient divider" />
    </S.DividerDiv>
  );
}

export default Divider;
