import { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { AddButton, MinusButton, PruoductAmountContainer } from "./styles";

interface ProductAmountProps{
    incrementCoffeesAmount?: (increment:number) => void,
    coffeeAmount?: number
}


export function PruoductAmount({coffeeAmount,incrementCoffeesAmount}:ProductAmountProps){
    

    
    function handleIncreaseCoffeeAmount(){
        if(incrementCoffeesAmount){
            incrementCoffeesAmount(1)

        }
    }
    function handleDecreaseCoffeeAmount(event: any){
        if(incrementCoffeesAmount){
            incrementCoffeesAmount(-1)

        }
    }
    
   
    return(
        <PruoductAmountContainer  >
            <MinusButton onClick={handleDecreaseCoffeeAmount}/>
            <input
                min={0}
                readOnly={true}
                type="number"
                placeholder="0"
                value={coffeeAmount}
                maxLength={1}/>
            <AddButton onClick={handleIncreaseCoffeeAmount}/>
        </PruoductAmountContainer>
    )
}