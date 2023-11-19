import { useHistory, useParams } from "react-router-dom";
import { merchList } from "components/MerchSection/MerchData";
import useViewport from "components/UseViewport";
import * as S from "./MerchItemPage.styles";

const merchItemPage = () => {
  const params = useParams();
  const history = useHistory();
  const { width } = useViewport();
  const mobileView = !(width > 768 ? true : false);

  const merchItem = merchList.filter(
    // @ts-expect-error b/c we're using old react router doesn't support element={}
    (item) => item.id === parseInt(params.itemNumber)
  )[0];
  console.log(merchItem);

  if (!merchItem) {
    history.push("/merch");
    return <></>;
  } else {
    return (
      <>
        <S.MerchItemPageContainer mobileView={mobileView}>
          <S.MerchItemPageContent mobileView={mobileView}>
            <S.MerchItemImage mobileView={mobileView}>
              <img width={mobileView ? "200" : "400"} src={merchItem.image} />
            </S.MerchItemImage>
            <S.MerchItemItemDetails>
              <S.MerchItemItemName>{merchItem.item}</S.MerchItemItemName>
              <S.merchItemPrice>{merchItem.price}</S.merchItemPrice>
              <S.merchItemSizes style={{ marginTop: "16px" }}>
                Available Sizes
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                  }}
                >
                  {merchItem.sizes.map((size) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100px",
                        height: "50px",
                        background: "#F5F5F5",
                        borderRadius: "0.5rem",
                      }}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </S.merchItemSizes>
              <S.merchItemColors style={{ marginTop: "1rem" }}>
                Available Colors
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  {merchItem.colors.map((color) => (
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        background: color,
                        border: "solid",
                        borderColor: "rgb(156 163 175)",
                        borderRadius: "999px",
                      }}
                    ></div>
                  ))}
                </div>
              </S.merchItemColors>
              <button
                style={{
                  marginTop: "36px",
                  width: "75%",
                  backgroundColor: "#50ABED",
                  color: "white",
                  outline: "none",
                  border: "none",
                  padding: "12px",
                  borderRadius: "10px",
                }}
              >
                Buy Now
              </button>
            </S.MerchItemItemDetails>
          </S.MerchItemPageContent>
        </S.MerchItemPageContainer>
      </>
    );
  }
};

export default merchItemPage;
