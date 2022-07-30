import styled from "styled-components";
interface iconBackground {
    variant: 'yellow-600' | 'yellow-300'
}
export const FarewellContainer = styled.div`
    display: flex;
    column-gap: 6.375rem;

    margin-top: 7rem;

    @media (max-width: 800px) {
            row-gap: 3.5rem;
            align-items: center;
            flex-direction: column;

            img{
                width: 100%;
                max-width: 400px;
            }
         }
         @media (max-width: 400px){
            h1{
                text-align: center;
                font-size: 2rem;
                line-height: normal;
            }
         }

    main{
        flex: 1;

        h1{
            font-size: 2rem;
            font-family: ${props => props.theme.fonts.Ballo};;
            color: ${props => props.theme.colors["yellow-600"]};
            font-weight: 800;
            margin-bottom: .25rem;
         
        }
        p{
            font-size: 1.25rem;
            color: ${props => props.theme.colors.SubTitle};
        }
    }
`
export const InformationsContaier = styled.section`
    display: flex;
    flex-direction: column;

    padding: 2.25rem;
    margin-top: 2.25rem;
    border-radius: 6px 36px 6px 36px;
    border: 1px solid ${props => props.theme.colors["purple-300"]};
    row-gap: 2rem;

  
    div{
        display: flex;
        column-gap: 0.75rem;
        color: ${props => props.theme.colors.Text};

        p{
            font-size:  1rem;
            
        }

        
        svg{
            background-color: ${props => props.theme.colors["purple-300"]};
            width: 2rem;
            padding: .4rem;
            height: 2rem;
            color: ${props => props.theme.colors["white-100"]};
            border-radius: 15px;

            &.timer{
                background-color: ${props => props.theme.colors["yellow-300"]};
            }
            &.currency{
                background-color: ${props => props.theme.colors["yellow-600"]};
            }
        }

      
    };
`
export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;


    height: 2rem;
    width: 2rem;
    background-color: ${props =>props.theme.colors["purple-300"]};
    border-radius: 2rem;

 
`