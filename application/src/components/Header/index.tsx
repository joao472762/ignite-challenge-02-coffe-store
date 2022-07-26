import { HeaderContainer,Location } from "./styles";
import CoffeShopLogoSvg from '../../assets/coffe-shop-logo.svg'
import MapPinSvg from '../../assets/mapIcon.svg'
import { NavLink } from "react-router-dom";
import { ShoppingCart} from 'phosphor-react'

export function Header(){
    return(
        <HeaderContainer>
            <NavLink to={'/'}>
                <img src={CoffeShopLogoSvg}/>
            </NavLink>
            <section>
                <Location>
                    <img src={MapPinSvg}/>
                    <span>Porto Alegre, RS</span>
                </Location>
                <NavLink to='/compra'>
                    <ShoppingCart/>
                </NavLink>
            </section>
        </HeaderContainer>
    )
}