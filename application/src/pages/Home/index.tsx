import axios from "axios";
import { useEffect, useState } from "react";
import { ShoppingCart, Timer, Package, Coffee} from 'phosphor-react'

import { Card } from "./components/Card";
import { COFFEES_API } from "../../services/api";
import coffeImage from '../../assets/coffeImage.svg'
import { 
    Information, 
    Presentation,
    HomeContainer,
    CardsContainer, 
    InformationConatiner, 
} from "./styles";


export interface coffeeProps  {
    id: string,
    type: []
    name: string,
    image: string,
    price: number
    description: string
}

export function Home(){
    const [coffees, setCoffees] = useState<coffeeProps[]>([])

    useEffect(()=>{
        axios.get(COFFEES_API).
        then(respose => setCoffees(()=> respose.data))
    },[setCoffees])
    
    return(
        <HomeContainer>
            <aside>
                <Presentation>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    
                    <InformationConatiner>
                        <Information variant="yellow-600">
                            <ShoppingCart weight="fill"/>
                            <span>Compra simples e segura   </span>
                        </Information>
                        <Information variant="Text">
                            <Package weight="fill"/>
                            <span>Embalagem mantém o café intacto</span>
                        </Information>
                        <Information variant="yellow-300">
                            <Timer weight="fill"/>
                            <span>Entrega rápida e rastreada</span>
                        </Information>
                        <Information variant="purple-300">
                            <Coffee weight="fill"/>
                            <span>O café chega fresquinho até você</span>
                        </Information>
                    </InformationConatiner>

                </Presentation>
                <img src={coffeImage} /> 
            </aside>
            <main>
                <h2>Nossos cafés</h2>
                <CardsContainer>
                    {coffees?.map(coffee => {
                        return(
                            <Card  
                                key={coffee.id} 
                                coffeeprops={coffee}
                            />
                        )
                    })}
                </CardsContainer>
                
            </main>
        </HomeContainer>
    )
}