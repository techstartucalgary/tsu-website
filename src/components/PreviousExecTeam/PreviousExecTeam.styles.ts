import styled from "styled-components";

export const PrevTeamSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-top: 2%;
  background-color: white;
`;

export const p = styled.div`
  font-size: 2.5rem;
  color: black;
  font-weight: 400;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

export const PaginationControl = styled.div`
display: flex;
  /* border: 1px red solid; */
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

export const ArrowButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  color: #333;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const YearButton = styled.button`
  background-color: transparent;
  border: 1px lightgray solid;
  border-radius: 10px;
  color: #333;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #007bff;
  }
  &.selected {
    background-color: lightgray;
  }
`;

export const TeamList = styled.div`
  display:flex;
  /* border: 1px solid blue; */
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 1rem;
  & > div {
    /* border: 1px dotted green; */
  }
    /* Styles for desktop view */
  @media (min-width: 768px) {
    .team-member {
      flex: 1 1 calc(50% - 16px); /* Two columns layout with gap adjustment */
    }
    
    /* Empty space for the right column when there's an odd number of items */
    &::after {
      content: '';
      flex: 1 1 calc(50% - 16px); /* Maintain the column structure */
      visibility: hidden; /* Hide the empty space */
    }
  }
`;
export const YearPagination = styled.div``;
