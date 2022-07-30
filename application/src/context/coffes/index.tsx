import { createContext, ReactNode, useReducer, useState} from "react";
import { CoffeesInTrolleyProps, Reducer } from "../../reducer/Coffes";
import { ClearCoffeeTrolleyAction, deleteOneCoffeeAction, UpdateCoffeTrolleyAction } from "../../reducer/Coffes/actions";


interface CoffesContextProviderProps {
    children: ReactNode,

}

interface CoffesContextType {
    quantityRepeatedCoffees: number,
    priceAllCoffeesFormated: string,
    coffeesInTrolley: CoffeesInTrolleyProps[]
    ClearCoffeeTrolley: () => void
    UpdateCoffeTrolley: (newCoffee: CoffeesInTrolleyProps) => void,
    deleteOneCoffee: (coffeeId: string) => void
}
export const CoffesContext = createContext({} as CoffesContextType)



export function CoffesContextProvider({children}:CoffesContextProviderProps){
    const [coffeesInTrolley,dispatch] = useReducer(Reducer,[])
    
    const priceAllCoffees = coffeesInTrolley.reduce((priceAllCoffees,currentCoffe)=>{
        return priceAllCoffees + (currentCoffe.price * currentCoffe.coffeeAmount)
    },0)

    const priceAllCoffeesFormated = priceAllCoffees.toLocaleString('pt-br',{
        style: 'currency',
        currency: 'BRL'
    })
    const quantityRepeatedCoffees = coffeesInTrolley.reduce((quantityRepeatedCoffees,currentCoffe)=>{
        return quantityRepeatedCoffees + currentCoffe.coffeeAmount
    },0)


    function UpdateCoffeTrolley(newCoffee: CoffeesInTrolleyProps){
        dispatch(UpdateCoffeTrolleyAction(newCoffee))     
    }
    
    function deleteOneCoffee(coffeeId:string){
        dispatch(deleteOneCoffeeAction(coffeeId))   
    }
    function ClearCoffeeTrolley(){
        dispatch(ClearCoffeeTrolleyAction())
    }

    return(
        <CoffesContext.Provider value={
            {   
                coffeesInTrolley,
                quantityRepeatedCoffees,
                priceAllCoffeesFormated,
                deleteOneCoffee,
                ClearCoffeeTrolley,
                UpdateCoffeTrolley,
            }}>
            {children}
        </CoffesContext.Provider>
    )
}