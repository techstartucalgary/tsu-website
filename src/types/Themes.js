import {createGlobalStyle} from 'styled-components'

export const lightTheme = {
  
  body: `#95D5B2`,
  fontColor: "black",
}

export const darkTheme = {
    body: '#282A36',
    fontColor:'white',
}

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
}`