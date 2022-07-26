import styled from "styled-components";
import { theme } from "../../theme/styles/default";

const {colors} = theme

interface IconBackground  {
    variant: "yellow-300" | "yellow-600" | "purple-300" | 'Text'
}
const iconBackground = {
    "yellow-300": colors["yellow-300"],
    "yellow-600": colors["yellow-600"],
    "purple-300": colors["purple-600"],
    "Text" : colors.Text
}





export const HomeContainer = styled.div`
    margin-top: 7.875rem;

    aside{
        display: flex;
        justify-content: space-between;
        column-gap: 3.5rem;
    }
    main{
        margin-top: 8.75rem;

        h2{
            font-size: 2rem;
            line-height: 2.562rem;
            font-weight: 800;
            color: ${props => props.theme.colors.SubTitle};
            font-family: ${props => props.theme.fonts.Ballo};
        }
    }
`
export const Presentation = styled.section`


    h1{
        font-size: 3rem;
        font-weight: 800;
        font-family: ${props => props.theme.fonts.Ballo};
        color: ${props => props.theme.colors.Tittle};
        line-height: 4.0rem;
    }
    p{
        margin-top: 1rem;
        font-size: 1.25rem;
        color: ${props => props.theme.colors.SubTitle};
        line-height: 1.65rem;
    }
`

export const InformationConatiner = styled.div`
    grid-template-columns: 1fr 1fr;
    margin-top:  4.125rem;
    row-gap: 1.25rem;
   
    display: grid;
    flex-wrap: wrap;

    
`
export const Information = styled.div<IconBackground>`

    display: flex;
    align-items: center;
    column-gap: .75rem;
    color: ${props => props.theme.colors.Text};
    

    svg{
        background-color: ${props => iconBackground[props.variant]};
        width: 2rem;
        padding: .5rem;
        height: 2rem;
        color: ${props => props.theme.colors["white-100"]};
        border-radius: 15px;
    }

`
export const CardsContainer = styled.section`
        margin-top: 3.375rem;
        display: grid;
        flex-wrap: wrap;
        justify-content: center;
        grid-template-columns: repeat(auto-fit,256px);
        column-gap: 2rem;
        row-gap: 2.5rem;
      
`