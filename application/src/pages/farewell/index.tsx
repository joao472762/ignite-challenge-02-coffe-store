import {CurrencyDollar,Timer,MapPin} from 'phosphor-react'
import { useContext } from 'react'
import IlustrationSvg from '../../assets/Illustration.svg'
import { PessoalDatas } from '../../context/pessoalDatas'
import { theme } from '../../theme/styles/default'
import { FarewellContainer, IconContainer, InformationsContaier } from './styles'
export function Farewell(){
    const {addreessInfromation,paymentMethod} = useContext(PessoalDatas)
    function formatPaymentMethod(){
 
        switch(paymentMethod){
            case 'crédito':
                return 'Cartão de Crédio';
            case 'débito':
                return 'Cartão de débito'
            case 'dinheiro':
                return 'Dinheiro';
            default: 'Dinheiro'
        }

    }
    const paymentMethodFormated = formatPaymentMethod()
   

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
                        <p>Entrega em <strong>{addreessInfromation?.street}
                        </strong>
                            {addreessInfromation?.neighborhood}, {addreessInfromation?.houseNumber}   
                            {addreessInfromation?.city} - {addreessInfromation?.state}</p>
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
                            <strong>{paymentMethodFormated}</strong>
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