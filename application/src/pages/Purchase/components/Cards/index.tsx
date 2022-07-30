import { Trash } from "phosphor-react";
import { useContext, MouseEvent } from "react";
import { CoffesContext } from "../../../../context/coffes";
import { CoffeesInTrolleyProps } from "../../../../reducer/Coffes";
import { Actions, CardContainer,AddButton,MinusButton, CoffeeAmount} from "./styles";

interface CardProps {
    props: CoffeesInTrolleyProps
}

export function Card({props}:CardProps){
    const {image,name,price,coffeeAmount,id} = props
    const {UpdateCoffeTrolley,deleteOneCoffee} = useContext(CoffesContext)

    const coffeQuantityPrice = (coffeeAmount * price)
    const coffeeQuantityPriceFormated = coffeQuantityPrice.toLocaleString('pt-br',{
        style: 'currency',
        currency: 'BRL'
    })


    function handleIncreaseCoffeeAmount(event: MouseEvent){
        event.preventDefault()
        const coffeeToUpdate = {...props,coffeeAmount: coffeeAmount + 1}
        UpdateCoffeTrolley(coffeeToUpdate)
    }
    
    function handleDecreaseCoffeeAmount(event: MouseEvent){
        event.preventDefault()
        if(coffeeAmount <= 1){
            return
        }
        const coffeeToUpdate = {...props,coffeeAmount: coffeeAmount - 1}
        UpdateCoffeTrolley(coffeeToUpdate)
    }

    function handleDeleteOneCoffee(event: MouseEvent){
        event.preventDefault()
        deleteOneCoffee(id)
    }
    
   

    return(
        <CardContainer>
            <img src={image}/>
            <div>             
                <span>{name}</span>
                <Actions>
                
                    <CoffeeAmount>
                        <MinusButton
                            title='Retirar mais um café'
                            onClick={handleDecreaseCoffeeAmount}
                        />
                        <span>{coffeeAmount}</span>
                        <AddButton
                            title='Adicionar mais um café'
                            onClick={handleIncreaseCoffeeAmount}
                        />
                    </CoffeeAmount>

                    <button 
                        className='remove'
                        onClick={handleDeleteOneCoffee}
                    >
                        <Trash/>
                        <span>Remover</span>
                    </button>
                </Actions>
            </div>
            <strong>{coffeeQuantityPriceFormated}</strong>
        </CardContainer>
    )
}