import { Actions, CardContainer, Category, InputArea, Separator } from "./styles";
import { ShoppingCart} from 'phosphor-react'
import CoffeSvg from '../../../../../public/assets/capuccino.svg'
import { coffeProps } from "../..";
interface CardProps {
    props: coffeProps
}

export function Card({props}: CardProps){
    const {description,image,name,price,type} = props

    return(
        <CardContainer>
            <img src={image} alt="" />

            <div>
                {type.map(category => {
                    return(<Category>{category}</Category>)
                })}
            </div>

            <strong>{name}</strong>
            <p>{description}</p>

            <Actions>
                    
                    <div>
                        <span>R$</span><strong>{price}</strong>
                    </div>
                <Separator>
                    <InputArea>
                        <button>-</button>
                        <input type="number" maxLength={1} defaultValue={1}/>
                        <button>+</button>

                    </InputArea>
                    <ShoppingCart/>
                </Separator>

            </Actions>

        </CardContainer>
    )
}