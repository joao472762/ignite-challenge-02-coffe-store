import styled from "styled-components"

export const CardContainer = styled.li`
    display: flex;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${props => props.theme.colors.Button};;

    img{
        width: 4rem;
        height: 4rem;
        margin-right: 1.25rem;
    }
    & > div{
        margin-right: 3.125rem;

        span{
            color: ${props => props.theme.colors.SubTitle};
        }
    }
`
export const Actions = styled.div`
    margin-top: .5rem;
    display: flex;
    column-gap: .5rem;

    span{
        user-select: none;
        color: ${props => props.theme.colors.Text}
    }

    button.remove{
        display: flex;
        justify-content: center;
        align-items: center;

        column-gap: 0.375rem;
        cursor: pointer;
        padding: .5rem;
        border-radius: 6px;
        background-color: ${props => props.theme.colors.Button};
        color: ${props => props.theme.colors.Text};
        transition: .2s background-color;

        &:hover{
            background-color: ${props => props.theme.colors.Hover};

        }

        svg{
            color: ${props => props.theme.colors["purple-300"]};
        }
    }
`
export const CoffeeAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    width: 4rem;
    background: ${props => props.theme.colors.Button};
    border-radius: 6px;

    span{
        color: ${props => props.theme.colors.Tittle};
    }
`
const baseButton = styled.button`
    width: 40px;
    height: 40px;
    background-color:  transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer ;
`

export const AddButton = styled(baseButton)`
    &::before{
        content: '';
        border-radius: 8px;
        display: block;
        background: ${props => props.theme.colors["purple-300"]};
        width: 1.31px;
        height: 10.94px;
        transform: translate(5.8px);
    }
    &::after{
        content: '';
        border-radius: 8px;
        display: block;
        background: ${props => props.theme.colors["purple-300"]};
        width: 10.94px;
        height: 1.31px;  
    }
`
export const MinusButton = styled(baseButton)`
     &::after{
        content: '';
        border-radius: 8px;
        display: block;
        background: ${props => props.theme.colors["purple-300"]};
        width: 10.94px;
        height: 1.31px;
    }
`