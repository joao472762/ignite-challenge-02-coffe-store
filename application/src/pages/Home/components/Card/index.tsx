import { Actions, CardContainer,Categorys, InputArea, Separator } from "./styles";
import { ShoppingCart} from 'phosphor-react'
import { coffeProps } from "../..";
import { PruoductAmount } from "../../../../components/ProductAmount";
interface CardProps {
    props: coffeProps
}

export function Card({props}: CardProps){
    const {description,image,name,price,type} = props

    return(
        <CardContainer>
            <img src={image} alt="" />

            <Categorys>
                {type.map(category => {
                    return(<span key={category}>{category}</span>)
                })}
            </Categorys>

            <strong>{name}</strong>
            <p>{description}</p>

            <Actions>
                    
                    <div>
                        <span>R$</span><strong>{price}</strong>
                    </div>
                <Separator>
                    <PruoductAmount/>
                    <ShoppingCart/>
                </Separator>

            </Actions>

        </CardContainer>
    )
}