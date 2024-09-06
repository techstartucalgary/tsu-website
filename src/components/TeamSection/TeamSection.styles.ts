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

export const SliderWrapper = styled.div<{ selectedCategory: "executives" | "projectManagers" | "alumni" }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 60px;
  background-color: ${({ selectedCategory }) =>
    selectedCategory === "executives" ? "rgb(77, 214, 168)" :
      selectedCategory === "projectManagers" ? "rgb(97, 195, 212)" :
        "#c9e265"};
  border-radius: 50px;
  padding: 5px;
`;

export const SliderOption = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
  padding: 10px 5px;
  font-weight: 500;
  font-size: 1.5em;
  color: #fff;
  z-index: 2;

  @media (max-width: 700px) {
    font-size: 1.2em;
  }
`;

export const SliderPosition = styled.div<{ selectedCategory: "executives" | "projectManagers" | "alumni" }>`
  position: absolute;
  top: 5px;
  left: ${({ selectedCategory }) =>
    selectedCategory === "executives" ? "5px" :
      selectedCategory === "projectManagers" ? "calc(33.3% + 5px)" : "calc(66.6% + 5px)"};
  width: calc(33.3% - 10px);
  height: calc(100% - 10px);
  background-color: ${({ selectedCategory }) =>
    selectedCategory === "executives" ? "rgb(77, 214, 168)" :
      selectedCategory === "projectManagers" ? "rgb(97, 195, 212)" :
        "#c9e265"};
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 3px 3px;
  transition: left 0.8s ease;
`;