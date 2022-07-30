import { Bank, CreditCard, CurrencyDollar, Money, Sticker } from "phosphor-react";
import { useContext,MouseEvent} from "react";

import { paymentMethodProps, PessoalDatas } from "../../../../context/pessoalDatas";
import { theme } from "../../../../theme/styles/default";
import { Header, PaymentActions, PaymentsMethodContainer } from "./styles";

export function PaymentsMethod(){
    const {callSetPaymentMethod,paymentMethod} = useContext(PessoalDatas)

    function handleSetPaymentMethod(method:paymentMethodProps,event:MouseEvent){
        event.preventDefault()
        callSetPaymentMethod(method)
    }
    return(
        <PaymentsMethodContainer>
            <Header>
                <CurrencyDollar color={theme.colors['purple-600']}/>
                <div>
                    <h2>Pagamento</h2>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </Header>
            <PaymentActions>
                <button onClick={event => handleSetPaymentMethod('crédito',event)}>
                    <CreditCard />
                    <span>CARTÃO DE CRÉDITO</span>
                </button>
                <button onClick={event => handleSetPaymentMethod('débito',event)}>
                    <Bank/>
                    <span>CARTÃO DE DÉBITO</span>
                </button>
                <button onClick={event => handleSetPaymentMethod('dinheiro',event)}>
                    <Money/>
                    <span>DINHEIRO</span>
                </button>
            </PaymentActions>
        </PaymentsMethodContainer>
    )
}