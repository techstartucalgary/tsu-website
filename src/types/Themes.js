import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: `white`,
  background: "#F8F8F8",
  fontColor: "black",
  docsPage__logo: "images/tech-start-logo-white.png",
  color: "#404440",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
};

export const darkTheme = {
  body: "#0e1111",
  fontColor: "white",
  src: "images/tech-start-logo-white.png",
  color: "#d1e2d1",
  boxShadow:
    "rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px",
  /*src: "images/tech-start-logo-white.png",*/
};

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
}

.docsPage__links ul li a{
  color:${(props) => props.theme.fontColor};
}

.docsPage__ol button{
  color:${(props) => props.theme.fontColor};
}

.docsPage__content {
  color:${(props) => props.theme.fontColor};
}

.guide__background:hover,
.guide__background:focus {
  box-shadow:${(props) => props.theme.boxShadow};
}

.guide__background{
  background-color: ${(props) => props.theme.background};
}

.guideDescription{
  color:${(props) => props.theme.fontColor};
} 

.guideName{
  color:${(props) => props.theme.fontColor}
}

.docsPage__title{
  color:${(props) => props.theme.color}
}`;
