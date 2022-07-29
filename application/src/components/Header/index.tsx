import { HeaderContainer,Location } from "./styles";
import CoffeShopLogoSvg from '../../assets/coffe-shop-logo.svg'
import { NavLink } from "react-router-dom";
import { ShoppingCart, MapPin} from 'phosphor-react'

export function Header(){
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
                </NavLink>
            </section>
        </HeaderContainer>
    )
}