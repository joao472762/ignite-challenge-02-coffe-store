import styled from "styled-components";


export const HeaderContainer = styled.header`
    display:  flex;
    justify-content: space-between;

    section{
        column-gap: .75rem;
        display: flex;
    }

    a{
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
`
export const Location = styled.div`
    display:  flex;
    align-items: center;
    height: 2.375rem;
    padding: 0 .5rem;
    border-radius: 6px;
    background-color: ${props => props.theme.colors["purple-100"]};
    column-gap: .45rem;

    span{
        font-size: 0.875rem;
        color: ${props => props.theme.colors["purple-600"]};
    }


`
