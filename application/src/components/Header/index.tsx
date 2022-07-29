import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, MapPin} from 'phosphor-react'

import { CoffesContext } from "../../context/coffes";
import CoffeShopLogoSvg from '../../assets/coffe-shop-logo.svg'
import { CoffesAmount, HeaderContainer,Location } from "./styles";


export function Header(){
    
    const {coffeesInTrolley} = useContext(CoffesContext)

    return(
        <HeaderContainer>
            <NavLink to={'/'}>
                <img src={CoffeShopLogoSvg}/>
            </NavLink>
            <section>
                <Location>
                    <MapPin weight="fill"/>
                    <span>Porto Alegre, RS</span>
                </Location>
                <NavLink to='/compra'>
                    <ShoppingCart weight="fill"/>
                    {
                        coffeesInTrolley.length > 0 
                        && (<CoffesAmount>{coffeesInTrolley.length}</CoffesAmount>)
                    }
                </NavLink>
            </section>
        </HeaderContainer>
    )
}