import { ShoppingCart} from 'phosphor-react'
import { useContext, useState } from "react";

import { coffeeProps } from "../..";
import { PruoductAmount } from "../ProductAmount";
import { Actions, CardContainer,Categorys, Separator } from "./styles";
import { CoffeesInTrolleyProps, CoffesContext } from "../../../../context/coffes";


interface CardProps {
    coffeeprops: coffeeProps,
}


export function Card({coffeeprops}: CardProps){
    const {id, description,image, name,price,type} = coffeeprops
    const {UpdateCoffeTrolley, coffeesInTrolley} = useContext(CoffesContext)
    
    const [coffeeAmount, setcoffeeAmount] = useState(() => {
        const currentCoffeExistInTrolley = coffeesInTrolley.find(coffe =>{
            return coffe.id === id 
        })
        if(currentCoffeExistInTrolley){
            return currentCoffeExistInTrolley.coffeeAmount
        }
        return 0
    })

    function changeCoffeeAmount(value: number){
        if(coffeeAmount <= 0 && value <= 0){
            return
        }
        setcoffeeAmount(state => state + value)     
    }
    
    function handleUpdateCoffeTrolley(){
        const newCoffee : CoffeesInTrolleyProps  = {...coffeeprops,coffeeAmount: coffeeAmount}
        UpdateCoffeTrolley(newCoffee)
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
                        changeCoffeeAmount={changeCoffeeAmount}
                        coffeeAmount={coffeeAmount}
                    />
                    <button
                        onClick={handleUpdateCoffeTrolley}
                        disabled={isDisabled}
                    >
                        <ShoppingCart weight='fill'/>
                    </button>
                </Separator>
            </Actions>
        </CardContainer>
    )
}