import styled from "styled-components/macro";

export const AnnouncementContainer = styled.div`
  width: 100%;
  background-color: var(--primary-green);
  color: white;
  padding: 12px 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  position: fixed;
  top: 83.6px;
  left: 0;
  z-index: 998;
  
  a {
    color: white;
    text-decoration: underline;
    margin-left: 5px;
    
    &:hover {
      opacity: 0.9;
    }
  }
`;
