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
    quantityRepeatedCoffees: number,
    priceAllCoffeesFormated: string,
    coffeesInTrolley: CoffeesInTrolleyProps[]
    UpdateCoffeTrolley: (newCoffee: CoffeesInTrolleyProps) => void,
    deleteOneCoffee: (coffeeId: string) => void
}
export const CoffesContext = createContext({} as CoffesContextType)


export function CoffesContextProvider({children}:CoffesContextProviderProps){
    const [coffeesInTrolley, setCoffesInTrolley] = useState<CoffeesInTrolleyProps[]>([])

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
                quantityRepeatedCoffees,
                coffeesInTrolley,
                priceAllCoffeesFormated,
                deleteOneCoffee,
                UpdateCoffeTrolley,
            }}>
            {children}
        </CoffesContext.Provider>
    )
}