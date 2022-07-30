import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        border: none;
    }
    *:focus{
        outline: none;
        box-shadow: 0px 0px 0px 1px  ${props => props.theme.colors["yellow-300"]};
        border: none;
    }
    body{
        background-color: ${props => props.theme.colors.backgoround};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        font-size: 1rem;
        font-family: ${props => props.theme.fonts.Roboto};
        
        
    }
    @media (max-width: 400px){
        html{
            font-size: 85%
        }
    }
`
