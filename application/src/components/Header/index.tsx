import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, MapPin} from 'phosphor-react'

import { CoffesContext } from "../../context/coffes";
import CoffeShopLogoSvg from '../../assets/coffe-shop-logo.svg'
import { CoffesAmount, HeaderContainer,Location } from "./styles";
import { PessoalDatas } from "../../context/pessoalDatas";


export function Header(){
    
    const {coffeesInTrolley} = useContext(CoffesContext)
    const {addreessInfromation} = useContext(PessoalDatas)

    return(
        <HeaderContainer>
            <section>
                <NavLink to={'/'}>
                    <img src={CoffeShopLogoSvg}/>
                </NavLink>
                <div>
                    <Location>
                        <MapPin weight="fill"/>
                        {addreessInfromation &&
                            <span>{`${addreessInfromation?.city}, `}{addreessInfromation?.state}</span>
                        }
                    </Location>
                    <NavLink to='/compra'>
                        <ShoppingCart weight="fill"/>
                        {
                            coffeesInTrolley.length > 0
                            && (<CoffesAmount>{coffeesInTrolley.length}</CoffesAmount>)
                        }
                    </NavLink>
                </div>
            </section>
        </HeaderContainer>
    )
}