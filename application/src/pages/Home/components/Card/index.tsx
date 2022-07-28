import { Actions, CardContainer,Categorys, InputArea, Separator } from "./styles";
import { ShoppingCart} from 'phosphor-react'
import { coffeeProps, CoffeesInTrolleyProps } from "../..";
import { PruoductAmount } from "../../../../components/ProductAmount";
import { useState } from "react";


interface CardProps {
    coffeeprops: coffeeProps,
    addNewCoffeInTrolley: (newCoffe:CoffeesInTrolleyProps) => void
}


export function Card({coffeeprops,addNewCoffeInTrolley}: CardProps){
    const {id,description,image, name,price,type} = coffeeprops
    
    const [coffeeAmount, setcoffeeAmount] = useState(0)
    function incrementCoffeesAmount(increment: number){
        setcoffeeAmount(state => {
            if(state >= 1){
                return state + increment
            }
            return 1
        })
       
    }
    function handleAddNewCoffeInTrolley(){
        const newCoffee : CoffeesInTrolleyProps  = {...coffeeprops,coffeeAmount: coffeeAmount}
        addNewCoffeInTrolley(newCoffee)
      
    }

    const priceFormated = (price.toLocaleString('pt-br', {  minimumSignificantDigits: 3}))
    const isDisabled = coffeeAmount < 1
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
                        <span>R$ </span><strong>{priceFormated}</strong>
                    </div>
                <Separator>

                    <PruoductAmount
                        incrementCoffeesAmount={incrementCoffeesAmount}
                        coffeeAmount={coffeeAmount}
                    />
                    <button
                        onClick={handleAddNewCoffeInTrolley}
                        disabled={isDisabled}
                    >
                        <ShoppingCart/>
                    </button>
                </Separator>

            </Actions>

        </CardContainer>
    )
}