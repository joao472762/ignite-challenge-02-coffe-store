import { ActionTypes } from "./actions"

export interface CoffeesInTrolleyProps {
    id: string,
    type: []
    name: string,
    image: string,
    price: number
    description: string,
    coffeeAmount: number
}


export function Reducer(state:CoffeesInTrolleyProps[], action:any){
    switch(action.type){
        case ActionTypes.UPDATE_COFFEE_TROLLEY:{
            const coffeeSelected = state.find(coffe =>{
                return action.payload.newCoffee.id === coffe.id
            })
            if(coffeeSelected){
                const coffeesInTroleyWithOneCoffeeChanged = state.map(coffee =>{
                    if(coffeeSelected.id === coffee.id){
                        return action.payload.newCoffee
                    }
                    return coffee
                })
                return coffeesInTroleyWithOneCoffeeChanged
            }
            return [...state,action.payload.newCoffee]
        }

        case ActionTypes.DELETE_ONE_COFFE:{
            const  coffeTolleyWithoutOneCoffee = state.filter(coffee =>{
                return coffee.id != action.payload.id
            })
            return coffeTolleyWithoutOneCoffee
        }

        case ActionTypes.CLEAN_COFFE_TROLEY:{
            return []
        }

        default: return state
    }
}