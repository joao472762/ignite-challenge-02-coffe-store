import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    *:focus{
        box-shadow: none;
    }
    body{
        background-color: ${props => props.theme.colors.backgoround};
    }
    body, input, textarea, button{
        font-size: 1rem;
        font-family: ${props => props.theme.fonts.Roboto};
        
    }
`