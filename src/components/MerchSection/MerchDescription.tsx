import { MerchDescriptionDiv } from "./MerchDescription.styles";

interface MerchDescriptionProps {
  item: string;
  price: string;
}

const MerchDescription = (props: MerchDescriptionProps) => {
  return (
    <MerchDescriptionDiv>
      <h3>{props.item}</h3>
      <h4>{props.price}</h4>
    </MerchDescriptionDiv>
  );
};

export default MerchDescription;
