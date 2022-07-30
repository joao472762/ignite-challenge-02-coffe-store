import styled from "styled-components";


export const HeaderContainer = styled.header`
    

    position: fixed;
    left: 0;
    top: 0;
    
    width: 100vw;
    z-index: 2;
    box-shadow: 0px .1px 8px ${props => props.theme.colors["white-300"]};
    background-color: ${props => props.theme.colors["backgoround"]};

    section{
        padding: 1.25rem 2rem .5rem 2rem;
        max-width: 74rem;
        margin: 0 auto;
        flex: 1;
        display: flex;
        justify-content: space-between;
    }

    div{
        column-gap: .75rem;
        display: flex;

        a{  position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2.375rem;
            height: 2.375rem;
            border-radius: 6px;
            background-color: ${props => props.theme.colors["yellow-100"]};
    
            svg{
                font-size: 1.375rem;
                color: ${props => props.theme.colors["yellow-600"]};
            }
    
        }

    }

`
export const Location = styled.div`
    display:  flex;
    align-items: center;
    height: 2.375rem;
    padding: 0 .5rem;
    border-radius: 6px;
    background-color: ${props => props.theme.colors["purple-100"]};
    column-gap: .45rem;

    svg{
        font-size: 1.375rem;
        color: ${props => props.theme.colors["purple-300"]};
    }

    span{
        font-size: 0.875rem;
        color: ${props => props.theme.colors["purple-600"]};
    }


`
export const CoffesAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: -8px;
    top: -8px;

    border-radius: .75rem;
    width: 1.25rem;
    height: 1.25rem;
    font-size: .75rem;
    font-weight: 700;
    color: ${props => props.theme.colors["white-100"]};
    background-color: ${props => props.theme.colors["yellow-600"]};
`