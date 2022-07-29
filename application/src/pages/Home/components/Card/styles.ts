import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 0 1.25rem 2rem 1.25rem;
    border-radius: 8px 36px 8px 36px;
    background-color: ${props => props.theme.colors.Card};

    img{
        margin-top: -1.25rem;

    }
    strong{
        margin-top: 1rem;
        font-size: 1.25rem;
        color:  ${props => props.theme.colors["SubTitle"]};
        font-family: ${props => props.theme.fonts.Ballo};;

    }
    p{
        margin-top: .5rem;
        font-size: 0.875rem;
        line-height: 1.125rem;
        color:  ${props => props.theme.colors["Label"]}
    }
  
`
export const Categorys= styled.div`
    display: flex;
    column-gap: .25rem;
    margin-top: 1rem;

    span{
               
        font-size: 0.625rem;
        font-weight: 700;
        padding: .25rem .5rem;
        border-radius: 100px;
        color:  ${props => props.theme.colors["yellow-600"]};
        background: ${props => props.theme.colors["yellow-100"]};
    }
`
export const Actions = styled.div`
    margin-top: 2.281rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.437rem;

   

    button{

        &:not(:disabled):hover{
            svg{

                background-color: ${props => props.theme.colors["purple-300"]};
            }
        }
        &:disabled{
            svg{
                cursor: not-allowed;
                filter: opacity(.9);

            }
        }
        svg{
            padding: .5rem;
            cursor: pointer;
            width: 2.375rem;
            height: 2.375rem;
            border-radius: 6px;
            transition: .3s background-color;
            color:  ${props => props.theme.colors["Card"]};;
            background-color: ${props => props.theme.colors["purple-600"]};
    
        }
       
            
           
        
    }
`
export const InputArea = styled.div`
    
`
export const Separator = styled.div`
    display: flex;
    column-gap: .5rem
`
