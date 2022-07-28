import { CardsContainer, HomeContainer, Information, InformationConatiner, Presentation } from "./styles";
import { ShoppingCart, Timer, Package, Coffee} from 'phosphor-react'
import coffeImage from '../../assets/coffeImage.svg'
import { Card } from "./components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { COFFES_API } from "../../services/api";

export interface CoffeesInTrolleyProps {
    id: string,
    type: []
    name: string,
    image: string,
    price: number
    description: string,
    coffeeAmount: number
}
export interface coffeeProps  {
    id: string,
    type: []
    name: string,
    image: string,
    price: number
    description: string
}

export function Home(){
    const [coffes, setCoffes] = useState<coffeeProps[]>()
    const [coffeesInTrolley, setCoffesInTrolley] = useState<CoffeesInTrolleyProps[]>([])

    useEffect(()=>{
        axios.get(COFFES_API).
        then(respose => setCoffes(()=> respose.data))
    },[])

    function addNewCoffeInTrolley(newCoffee: CoffeesInTrolleyProps){
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
    
    return(
        <HomeContainer>
            <aside>
                <Presentation>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    
                    <InformationConatiner>
                        <Information variant="yellow-600">
                            <ShoppingCart/>
                            <span>Compra simples e segura   </span>
                        </Information>
                        <Information variant="Text">
                            <Package/>
                            <span>Embalagem mantém o café intacto</span>
                        </Information>
                        <Information variant="yellow-300">
                            <Timer/>
                            <span>Entrega rápida e rastreada</span>
                        </Information>
                        <Information variant="purple-300">
                            <Coffee/>
                            <span>O café chega fresquinho até você</span>
                        </Information>
                    </InformationConatiner>

                </Presentation>
                <img src={coffeImage} alt="" /> 
            </aside>
            <main>
                <h2>Nossos cafés</h2>
                <CardsContainer>
                    {coffes?.map(coffe => {
                        return(
                            <Card  
                                key={coffe.id} 
                                coffeeprops={coffe}
                                addNewCoffeInTrolley = {addNewCoffeInTrolley}
                            />
                        )
                    })}
                </CardsContainer>
                
            </main>
        </HomeContainer>
    )
}