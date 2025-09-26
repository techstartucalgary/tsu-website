import styled from "styled-components/macro";

export const AnnouncementContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  background-color: var(--primary-green);
  color: white;
  padding: 12px 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  position: fixed;
  top: 83.6px;
  left: 0;
  z-index: 998;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  line-height: 1.4;
  box-sizing: border-box;
  
  a {
    color: white;
    text-decoration: underline;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    padding-right: 4px;
    
    &:hover {
      opacity: 0.9;
    }
  }
`;
