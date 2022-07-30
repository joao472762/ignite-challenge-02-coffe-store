import styled from "styled-components";

export const AdrressFormContainer = styled.section`

    border-radius: 8px;
    background-color: ${props => props.theme.colors.Card};
    padding: 2.5rem;
    
`
export const Header = styled.div`
    display: flex;
    align-items: baseline;
    column-gap: .5rem;
    svg{
        color: ${props => props.theme.colors["yellow-600"]};
    }
    div{
        h2{
            font-size: 1rem;
            font-weight: normal;
            color: ${props => props.theme.colors.SubTitle};
        }
        p{
            font-size: .875rem;
            color: ${props => props.theme.colors.Text};
        }  
    }
`

export const InputArea = styled.div`
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
    row-gap: 1rem;

    div{
        display: grid;
        column-gap: .75rem;
        grid-template-columns: 200px 1fr;

        &:nth-last-of-type(1){
            grid-template-columns: 200px 1fr 3.75rem;
        }
    }

    input{
        display: block;

        width: 100%;
        background-color: ${props => props.theme.colors.Input};
        padding: .75rem;
        border-radius: 4px;
        font-size: .875rem;
        transition: .2s box-shadow;

        &.cep{
            width:  12.5rem;
        }
        &:focus{
            box-shadow: 0px 0px 0px 2px  ${props => props.theme.colors["yellow-300"]};;
        }
    
    };
`