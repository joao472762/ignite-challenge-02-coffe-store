import { CoffeesInTrolleyProps, Reducer } from "../../reducer/Coffes";
import { createContext, ReactNode, useEffect, useReducer} from "react";
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
    const [coffeesInTrolley,dispatch] = useReducer(Reducer,[], ()=> {
        const storage = localStorage.getItem('@coffe_store:coffes_trolley1.0.0')
        if(storage){
            return JSON.parse(storage)
        }
        return []
    })

    useEffect(()=>{
        const state = JSON.stringify(coffeesInTrolley)
        localStorage.setItem('@coffe_store:coffes_trolley1.0.0',state)
    },[coffeesInTrolley])
    
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