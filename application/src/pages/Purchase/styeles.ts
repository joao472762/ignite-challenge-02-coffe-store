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
export const HeaderForm = styled.div`
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


export const PaymentsMethods = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(11.125rem,1fr));
    gap: .75rem;

    margin-top: 2rem;

    button{
        display: flex;
        align-items: center;
        
        border-radius: 6px;
        cursor: pointer;
        column-gap: .75rem;
        padding: 1rem 1.0937rem;
        background-color: ${props => props.theme.colors.Button};
        font-size: .75rem;
        transition: .2s background-color;

        &:hover{
            background-color: ${props => props.theme.colors.Hover};

        }
        &:active{
            box-shadow: 0px 0px 0px 1px ${props => props.theme.colors["purple-300"]};;
        }

        svg{
            font-size: 1rem;
            color: ${props => props.theme.colors["purple-300"]};

        }
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