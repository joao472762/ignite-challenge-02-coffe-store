import {CurrencyDollar,Timer,MapPin} from 'phosphor-react'
import IlustrationSvg from '../../assets/Illustration.svg'
import { FarewellContainer } from './styles'
export function Farewell(){
    return (
        <FarewellContainer>
            <main>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <section>
                    <div>
                        <MapPin/>
                        <p>Entrega em <strong>Rua João Daniel Martinelli 102</strong>Farrapos - Porto Alegre, RS</p>
                    </div>
                    <div>
                        <Timer/>
                        <span>Previsão de entrega</span>
                        <strong> 20 min - 30 min</strong>
                    </div>
                    <div>
                        <span>Pagamento na entrega</span>
                        <strong>Cartão de Crédito</strong>
                    </div>
                </section>
            </main>
            <aside>
                <img src={IlustrationSvg} />
            </aside>
        </FarewellContainer>    
    )
}