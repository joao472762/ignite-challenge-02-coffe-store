import {CurrencyDollar,Timer,MapPin} from 'phosphor-react'
import IlustrationSvg from '../../assets/Illustration.svg'
import { theme } from '../../theme/styles/default'
import { FarewellContainer, IconContainer, InformationsContaier } from './styles'
export function Farewell(){
    const {} = theme
    return (
        <FarewellContainer>
            <main>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <InformationsContaier>
                    <div>
                        <IconContainer>
                            <MapPin weight='fill' size={40}/>
                        </IconContainer>
                        <p>Entrega em <strong>Rua João Daniel Martinelli 102</strong>Farrapos - Porto Alegre, RS</p>
                    </div>
                    <div>
                        <Timer weight='fill' className='timer'/>
                        <div>
                            <span>Previsão de entrega</span>
                            <strong> 20 min - 30 min</strong>
                        </div>
                    </div>
                    <div>
                        <CurrencyDollar className='currency'/>
                        <div>
                            <span>Pagamento na entrega</span>
                            <strong>Cartão de Crédito</strong>
                        </div>
                    </div>
                </InformationsContaier>
            </main>
            <aside>
                <img src={IlustrationSvg} />
            </aside>
        </FarewellContainer>    
    )
}