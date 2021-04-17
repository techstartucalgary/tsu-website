import {createGlobalStyle} from 'styled-components'

export const lightTheme = {
  
  body: `#F0F8FF`,
  fontColor: "black",
}

export const darkTheme = {
    body: '#0e1111',
    fontColor:'white',
}

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
}

.docsPage__links {
  color:${props => props.theme.fontColor};
}

.docsPage__header2 ul li a{
  color:${props => props.theme.fontColor};
}

.docsPage__ol button{
  color:${props => props.theme.fontColor};
}`