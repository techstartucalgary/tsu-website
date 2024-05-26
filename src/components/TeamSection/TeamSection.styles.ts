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
  position: relative;
  margin-top: 2%;
  margin-left: -5%;
`;

export const ToggleButtonLabel = styled.label`
  overflow-y: hidden;
  display: inline-block;
  position: relative;
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
  &::after {
    transform: translate(200px, -35px);
    content: "";
    display: block;
    border-radius: 50px;
    background-color: #49b893;
    @media (min-width: 320px) and (max-width: 475px) {
      width: 140px;
      height: 30px;
      margin-left: -65px;
      margin-top: 23px;
    }
    width: 210px;
    height: 40px;
    margin-left: 10px;
    margin-top: -57px;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.8s;
  }
`;

export const ToggleButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${ToggleButtonLabel} {
    background: #61c3d4;
    &::after {
      content: "";
      border-radius: 50px;
      background-color: #59acba;
      width: 200px;
      height: 40px;
      @media (min-width: 320px) and (max-width: 475px) {
        width: 130px;
        height: 30px;
        margin-left: 5px;
        margin-top: 23px;
      }
      margin-left: 5px;
      margin-top: -57px;
      transition: 0.8s;
      transform: translateY(-35px);
    }
  }
`;

export const TeamCategoryText = styled.p`
  font-size: 1em;
  margin-left: -20px;
  font-family: "Inter", Tahoma, sans-serif;
  color: white;
  font-weight: 500;
  
  @media (min-width: 320px) and (max-width: 475px) {
    font-size: 0.65em;
    color: white;
  }
`;

export const Slider = styled.p`
  font-size: 1em;
  margin-left: 200px;
  height: 24px;
  @media (min-width: 320px) and (max-width: 475px) {
    margin-top: -15px;
  }
  font-weight: 500;
`;
