import styled from "styled-components/macro";

export const TeamSection = styled.div`
  padding: 5vw;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  & > h2 {
    font-size: var(--chonky-header-size);
    font-weight: var(--chonky-header-weight);
    color: var(--primary-black);
    margin-bottom: 0;

    @media (max-width: 800px) {
      font-size: var(--thicc-subheading-size);
    }
  }
`;

export const ToggleButtonWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 2%;
  margin-left: -5%;
  justify-content: center;
  align-items: center;
`;

export const ToggleButtonLabel = styled.label`
  overflow-y: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 1.5em;
  margin: 0 10px;
  font-family: "Inter", Tahoma, sans-serif;
  color: white;
  font-weight: 400;
  z-index: 2;
  
  @media (min-width: 320px) and (max-width: 475px) {
    font-size: 0.65em;
    color: white;
  }
  @media (min-width: 351px) and (max-width: 475px) {
    width: 280px;
    height: 40px;
    margin-left: 0%;
    margin-top: 5%;
  }
  @media (min-width: 320px) and (max-width: 350px) {
    width: 280px;
    height: 40px;
    margin-left: 5%;
    margin-top: -5%;
  }
  margin-left: 0%;
  width: 425px;
  height: 50px;
  border-radius: 50px;
  background: #4dd6a8;
  cursor: pointer;
`;

export const ToggleButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  left: 0;
  top: 0;
  width: 42px;
  height: 26px;
  &:checked + ${ToggleButtonLabel} {
    background: #61c3d4;
  }
`;
