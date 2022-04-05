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
`;

export const ToggleButtonLabel = styled.label`
  overflow-y: hidden;
  display: inline-block;
  position: absolute;
  width: 300px;
  height: 50px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    transform: translateY(-35px);
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const ToggleButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${ToggleButtonLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
      transform: translateY(-35px);
    }
  }
`;
