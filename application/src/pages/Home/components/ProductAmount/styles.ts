import styled from "styled-components";



export const PruoductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    width: 4rem;
    background: ${props => props.theme.colors.Button};
    border-radius: 6px;

    span{
        user-select: none;
        color: ${props => props.theme.colors.Text}
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