import { CoffeesInTrolleyProps } from ".";

export  enum ActionTypes  {
    UPDATE_COFFEE_TROLLEY = 'UPDATE_COFFEE_TROLLEY',
    DELETE_ONE_COFFE = 'DELETE_ONE_COFFE',
    CLEAN_COFFE_TROLEY = 'CLEAN_COFFE_TROLEY',
}

export function UpdateCoffeTrolleyAction(newCoffee: CoffeesInTrolleyProps){
    return {
        type: ActionTypes.UPDATE_COFFEE_TROLLEY,
        payload:{
            newCoffee
        }
    }
}

export function deleteOneCoffeeAction(id:string){
    return {
        type: ActionTypes.DELETE_ONE_COFFE,
        payload: {
            id
        }
    }
}

export function ClearCoffeeTrolleyAction(){
    return {
        type: ActionTypes.CLEAN_COFFE_TROLEY
    }
}