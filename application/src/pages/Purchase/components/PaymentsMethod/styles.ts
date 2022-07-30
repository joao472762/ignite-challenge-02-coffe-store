import styled from "styled-components";

export const PaymentsMethodContainer = styled.section`
    margin-top: 0.937rem;
    padding: 3rem 2.5rem 2.5rem 2.5rem; 
    border-radius: 8px 36px 8px 36px;
    background-color: ${props => props.theme.colors.Card};
`
export const Header= styled.div`
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
export const PaymentActions = styled.div`
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