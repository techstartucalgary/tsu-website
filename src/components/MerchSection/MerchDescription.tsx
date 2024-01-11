import { MerchDescriptionDiv } from "./MerchDescription.styles";

interface MerchDescriptionProps {
  item: string;
  price: string;
}

const MerchDescription = (props: MerchDescriptionProps) => {
  return (
    <MerchDescriptionDiv>
      <h2>{props.item}</h2>
      <h3>{props.price}</h3>
    </MerchDescriptionDiv>
  );
};

export default MerchDescription;
