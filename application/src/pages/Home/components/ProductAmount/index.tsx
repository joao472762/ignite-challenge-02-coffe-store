import { AddButton, MinusButton, PruoductAmountContainer } from "./styles";

interface ProductAmountProps{
    changeCoffeeAmount: (increment:number) => void,
    coffeeAmount: number
}


export function PruoductAmount({coffeeAmount,changeCoffeeAmount}:ProductAmountProps){

    function handleIncreaseCoffeeAmount(){
            changeCoffeeAmount(1)

    }

    function handleDecreaseCoffeeAmount(){
            changeCoffeeAmount(-1)  
    }

    return(
        <PruoductAmountContainer  >
        
            <MinusButton
                title='Retirar mais um café'
                onClick={handleDecreaseCoffeeAmount}
            />
            <span>{coffeeAmount}</span>
            <AddButton
                title='Adicionar mais um café'
                onClick={handleIncreaseCoffeeAmount}
            />
        
        </PruoductAmountContainer>
    )
}