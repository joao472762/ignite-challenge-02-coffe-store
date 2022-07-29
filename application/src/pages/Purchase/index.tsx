import { useContext, useState } from 'react'
import { CreditCard, Bank, Money, CurrencyDollar } from 'phosphor-react'
import * as zod from 'zod'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {zodResolver} from '@hookform/resolvers/zod'
import {FormProvider, useForm} from 'react-hook-form'

import { theme } from '../../theme/styles/default'
import { CoffesContext } from '../../context/coffes'
import { 
    HeaderForm, 
    FormContainer, 
    PurchaseValues,
    PaymentsMethods, 
    FinalizePurchase, 
    CofirmationButton, 
    PurchaseContainer, 
 } from './styeles'
import { Card } from './components/Cards'
import { AdrressForm } from './components/AdrreessForm'

const newAddressValidationSchema = zod.object({
    city: zod.string(),
    street: zod.string(),
    houseNumber: zod.number(),
    neighborhood: zod.string(),
    state: zod.string(),
    complement: zod.string().optional(),
    cep: zod.string()
})
export type newAddressValidationSchemaData = zod.infer<typeof newAddressValidationSchema>

interface addreessInfromationProps{
    cep: string
    street: string
    houseNumber: number
    complement?: string 
    neighborhood: string
    city: string
    state: string
}


export function Purchase(){
    const [addreessInfromation, setAddresInformation] = useState<addreessInfromationProps>()
    const navigate = useNavigate()

    const newAdrressForm = useForm<newAddressValidationSchemaData>({
        resolver: zodResolver(newAddressValidationSchema)
    })
    const {reset,handleSubmit} = newAdrressForm

    function handleCreateNewAdrressInformation(data: newAddressValidationSchemaData){
        setAddresInformation(data)
        console.log(addreessInfromation)
        navigate('/entrega',{replace:true})
        reset()
        
    }

    const {coffeesInTrolley,priceAllCoffeesFormated,quantityRepeatedCoffees} = useContext(CoffesContext)
    return (

        <PurchaseContainer>
            <form onSubmit={handleSubmit(handleCreateNewAdrressInformation)}>
                <FormContainer>
                    <h1>Complete seu pedido</h1>

                    <FormProvider {...newAdrressForm}>
                        <AdrressForm/>
                    </FormProvider>
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
                                <span>{quantityRepeatedCoffees}</span>
                            </div>
                            <div>
                                <span>Entrega </span>
                                <span>Frete Gratis</span>
                            </div>
                            <div>
                                <strong> Total </strong>
                                <strong>{priceAllCoffeesFormated}</strong>
                            </div>
                        </PurchaseValues>
                        
                        <CofirmationButton type='submit'>Confirmar pedido</CofirmationButton>
                    </section>
                </FinalizePurchase>
            </form>
        </PurchaseContainer>
    )
}