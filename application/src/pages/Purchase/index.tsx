import { useContext } from 'react'
import { MapPinLine,CreditCard, Bank, Money, Trash ,CurrencyDollar } from 'phosphor-react'

import { theme } from '../../theme/styles/default'
import { CoffesContext } from '../../context/coffes'
import { PruoductAmount } from '../Home/components/ProductAmount'
import { 
    InputArea, 
    HeaderForm, 
    FormContainer, 
    PurchaseValues,
    PaymentsMethods, 
    FinalizePurchase, 
    CofirmationButton, 
    PurchaseContainer, 
 } from './styeles'
import { Card } from './components/Cards'


export function Purchase(){

    const {coffeesInTrolley} = useContext(CoffesContext)
    return (

        <PurchaseContainer>
            <form >
                <FormContainer>
                    <h1>Complete seu pedido</h1>
                    <section>
                        <HeaderForm>
                            <MapPinLine/>
                            <div>
                                <h2>Endereço de entrega</h2>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </HeaderForm>
                        <InputArea>
                            <input type="text" className='cep' placeholder='Cep' />
                            <input type="text"className='street' placeholder='Rua' />
                            <div>
                                <input type="number" placeholder='Número' />
                                <input type="text" className='complement' placeholder='Complemento' />
                            </div>
                            <div>
                                <input type="text" className='' placeholder='Bairro' />
                                <input type="text" placeholder='Cidade' />
                                <input type="text" placeholder='UF' />
                            </div>
                        </InputArea>
                    </section>
                    <section>
                         <HeaderForm>
                            <CurrencyDollar color={theme.colors['purple-600']}/>
                            <div>
                                <h2>Pagamento</h2>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </HeaderForm>
                        <PaymentsMethods>
                            <button>
                                <CreditCard/>
                                <span>CARTÃO DE CRÉDITO</span>
                            </button>
                            <button>
                                <Bank/>
                                <span>CARTÃO DE DÉBITO</span>
                            </button>
                            <button>
                                <Money/>
                                <span>DINHEIRO</span>
                            </button>
                        </PaymentsMethods>
            
                    </section>
                </FormContainer>
                <FinalizePurchase>
                    <h1>Cafés selecionados</h1>
                    <section>
                        <ul>
                            {
                                coffeesInTrolley.map(coffee => {
                                    return(
                                        <Card
                                        key={coffee.id}
                                            props={coffee}
                                        />
                                    )
                                })
                            }
                        </ul>
                        <PurchaseValues>
                            <div>
                                <span>Total de itens</span>
                                <span>R$ 29,70</span>
                            </div>
                            <div>
                                <span>Entrega </span>
                                <span>R$ 3,50</span>
                            </div>
                            <div>
                                <strong> Total </strong>
                                <strong> R$ 33,20 </strong>
                            </div>
                        </PurchaseValues>
                        <CofirmationButton>Confirmar pedido</CofirmationButton>
                    </section>
                </FinalizePurchase>
            </form>
        </PurchaseContainer>
    )
}