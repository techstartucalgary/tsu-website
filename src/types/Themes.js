import {createGlobalStyle} from 'styled-components'

export const lightTheme = {
  
  body: `white`,
  background:'#F8F8F8',
  fontColor: "black",
  docsPage__logo: "images/tech-start-logo-white.png",
}

export const darkTheme = {
    body: '#0e1111',
    fontColor:'white',
    src: "images/tech-start-logo-white.png",
}

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
}



.docsPage__links ul li a{
  color:${props => props.theme.fontColor};
}

.docsPage__ol button{
  color:${props => props.theme.fontColor};
}

.docsPage__content {
  color:${props => props.theme.fontColor};
}

.guide__background{
  background-color:${props => props.theme.background};
}

.guideName{
  color:${props => props.theme.fontColor}
}

.guideDescription{
  color:${props => props.theme.fontColor}
}`
