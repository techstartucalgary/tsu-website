import styled from "styled-components";

export const PrevTeamSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  /* padding-bottom: 2rem; */
  text-align: center;
  /* padding-top: 2%; */
  background-color: white;
`;

export const SectionHeader = styled.div`
  padding: 2rem 0;
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
  margin: 0 0.3rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #007bff;
  }
  &.selected {
    background-color: lightgray;
  }
`;

export const Divider = styled.hr`
  width: 60%;
  text-align: center;
   margin: 3rem auto; 
  border-top: 0.08rem solid #8d8d8d;
`;

export const TeamList = styled.div`
  max-width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TeamMember = styled.div<{ lastRow: boolean }>`
  padding-bottom: 2rem;

  ${
  // if we are are not on the last row, add border to the bottom
  ({ lastRow }) => !lastRow && `
    border-bottom: #8d8d8d 0.08rem solid;
  `}
`;

export const TeamHeader = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

export const TeamRole = styled.p`
  font-size: 16px;
  margin: 0 0 5px 0;
`;

export const TeamContact = styled.p`
  font-size: 14px;
  margin: 0 0 5px 0;
  
  a {
    color: #ff0000;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const YearPagination = styled.div``;
