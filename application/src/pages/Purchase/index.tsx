import {MapPinLine,CreditCard, Bank, Money, Trash ,CurrencyDollar} from 'phosphor-react'
import { PruoductAmount } from '../../components/ProductAmount'
import { theme } from '../../theme/styles/default'
import { Actions, CofirmationButton, FinalizePurchase, FormContainer, HeaderForm, InputArea, PaymentsMethods, Product, PurchaseContainer, PurchaseValues } from './styeles'


export function Purchase(){
    return (

        <PurchaseContainer>
            <h1>Complete seu pedido</h1>
            <form >
                <FormContainer>
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
                            <Product>
                                <img src='http://127.0.0.1:5173/assets/expressoTradicional.svg'/>
                                <div>             
                                    <span>Expresso Tradicional</span>
                                    <Actions>
                                        <PruoductAmount/>
                                        <button className='remove'>
                                            <Trash/>
                                            <span>Remover</span>
                                        </button>
                                    </Actions>
                                </div>
                                <strong>R$ 9.90</strong>
                            </Product>
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