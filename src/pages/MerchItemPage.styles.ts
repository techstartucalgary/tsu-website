import styled from "styled-components/macro";

interface MerchItemStyleProps {
  mobileView: boolean;
}

export const MerchItemPageContainer = styled.div<MerchItemStyleProps>`
  margin: ${(props) => props.mobileView ? "1rem;" : "5rem 8rem;"}
  padding: 1rem;
`;

export const MerchItemPageContent = styled.div<MerchItemStyleProps>`
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
  flex-direction: ${(props) => props.mobileView ? "column" : "row"}
`;

export const MerchItemImage = styled.div<MerchItemStyleProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: ${(props) => props.mobileView ? "100%" : ""}
`;

export const MerchItemItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 5px;
`
export const MerchItemItemName = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  width: 100%;
`

export const merchItemPrice = styled.div`
  color: #636363;
  width: 100%;
`

export const merchItemSizes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const merchItemColors = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
