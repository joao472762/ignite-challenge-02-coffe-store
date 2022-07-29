import { createContext, ReactNode, useState} from "react";

export interface CoffeesInTrolleyProps {
    id: string,
    type: []
    name: string,
    image: string,
    price: number
    description: string,
    coffeeAmount: number
}

interface CoffesContextProviderProps {
    children: ReactNode,

}

interface CoffesContextType {
    coffeesInTrolley: CoffeesInTrolleyProps[]
    UpdateCoffeTrolley: (newCoffee: CoffeesInTrolleyProps) => void,
    deleteOneCoffee: (coffeeId: string) => void
}
export const CoffesContext = createContext({} as CoffesContextType)


export function CoffesContextProvider({children}:CoffesContextProviderProps){
    const [coffeesInTrolley, setCoffesInTrolley] = useState<CoffeesInTrolleyProps[]>([])


    function UpdateCoffeTrolley(newCoffee: CoffeesInTrolleyProps){
        const coffeeSelected = coffeesInTrolley.find(coffe =>{
            return newCoffee.id === coffe.id
        })
        if(coffeeSelected){
            const coffeesInTroleyWithOneCoffeeChanged = coffeesInTrolley.map(coffee =>{
                if(coffeeSelected.id === coffee.id){
                    return newCoffee
                }
                return coffee
            })
            return setCoffesInTrolley(state => coffeesInTroleyWithOneCoffeeChanged)
        }
        setCoffesInTrolley([...coffeesInTrolley,newCoffee])        
    }
    
    function deleteOneCoffee(coffeeId:string){
        const coffeTolleyWithoutOneCoffee = coffeesInTrolley.filter(coffee => {
            return coffeeId != coffee.id
        })
        setCoffesInTrolley(state => coffeTolleyWithoutOneCoffee)
    }

    return(
        <CoffesContext.Provider value={
            {
                UpdateCoffeTrolley,
                coffeesInTrolley,
                deleteOneCoffee
            }}>
            {children}
        </CoffesContext.Provider>
    )
}