import styled from "styled-components";


export const PurchaseContainer = styled.div`
    margin-top: 4rem;
  
  
    form{
        display: grid;
        grid-template-columns: 1fr 28rem;
        column-gap: 2rem;

        margin-top: 0.937rem;
    }
`
export const FormContainer = styled.main`
    display:  flex;
    flex-direction: column;

    row-gap: .75rem;

    h1{
        font-size: 1.125rem;
        color: ${props => props.theme.colors.SubTitle};
        font-family: ${props => props.theme.fonts.Ballo};
    }
   
`

export const ShowFormAddrress = styled.button`
    background-color: transparent;
    border-radius: 6px;
    width: max-content;
    cursor: pointer;
    margin-bottom: 1rem;
    text-decoration: none;
    color: ${props => props.theme.colors["purple-600"]};
    font-size: .875rem;

    &:hover{

        color: ${props => props.theme.colors["purple-300"]};
    }
`
export const FinalizePurchase = styled.aside`
    h1{   
        font-size: 1.125rem;
        color: ${props => props.theme.colors.SubTitle};
        font-family: ${props => props.theme.fonts.Ballo};
    }
    section{
        margin-top: 0.937rem;
        padding: 3rem 2.5rem 2.5rem 2.5rem; 
        border-radius: 8px 36px 8px 36px;
        background-color: ${props => props.theme.colors.Card};
    }
    ul{
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
        list-style: none;
    }
    

`
export const PurchaseValues = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.8437rem;

    margin-top: 1.5rem;

    div{
        display: flex;
        justify-content: space-between;

        color:  ${props => props.theme.colors.Text};
        font-size: 0.875rem;

        strong{
          color:  ${props => props.theme.colors.SubTitle};
          font-size: 1.125rem
        }
    }
`


export const CofirmationButton = styled.button`
    display: flex;
    justify-content: center;
    
    cursor: pointer;
    margin-top: 2.25rem;
    width: 100%;
    font-weight: bold;
    font-size: 0.875rem;
    padding: .75rem;
    border-radius: 6px;
    background-color:  ${props => props.theme.colors["yellow-300"]};
    color:  ${props => props.theme.colors["white-100"]};

    transition: .2s background-color;

    &:hover{
        background-color: ${props => props.theme.colors["yellow-600"]};
    }
`
