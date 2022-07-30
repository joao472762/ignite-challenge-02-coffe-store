import * as zod from 'zod'
import { useNavigate} from 'react-router-dom'
import { useContext, MouseEvent } from 'react'
import { zodResolver} from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { Card } from './components/Cards'
import { CoffesContext } from '../../context/coffes'
import { AdrressForm } from './components/AdrreessForm'
import { PessoalDatas } from '../../context/pessoalDatas'
import {  
    FormContainer, 
    PurchaseValues,
    FinalizePurchase, 
    CofirmationButton, 
    PurchaseContainer,
    ShowFormAddrress,
} from './styles'
import { PaymentsMethod } from './components/PaymentsMethod'

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




export function Purchase(){
    const navigate = useNavigate()
    const {
        coffeesInTrolley,
        priceAllCoffeesFormated,
        quantityRepeatedCoffees,
        ClearCoffeeTrolley,
    } = useContext(CoffesContext)
    
    const {
        addreessInfromation,
        reseatAdrressInformations,
        createNewAddressInfromation,
    } = useContext(PessoalDatas)

    const newAdrressForm = useForm<newAddressValidationSchemaData>({
        resolver: zodResolver(newAddressValidationSchema)
    })

    const {reset,handleSubmit} = newAdrressForm

    function handleCreateNewAdrressInformation(data: newAddressValidationSchemaData){
        if(quantityRepeatedCoffees <1){
            return
        }
        createNewAddressInfromation(data)
        ClearCoffeeTrolley()
        navigate('/entrega',{replace:true})
        reset()
        
    }
    function handleFinishePurchase(){
        if(quantityRepeatedCoffees <1){
            return
        }
        ClearCoffeeTrolley()
        navigate('/entrega',{replace:true})
    }
    function handleResetAdrresInformation(event: MouseEvent){
        event.preventDefault()
        reseatAdrressInformations()
    }
    
    
    return (

        <PurchaseContainer>
            <form onSubmit={handleSubmit(handleCreateNewAdrressInformation)}>
                <FormContainer>
                    <h1>Complete seu pedido</h1>
                    <FormProvider {...newAdrressForm}>
                        {
                            !addreessInfromation 
                            ? <AdrressForm/>

                            :(  <ShowFormAddrress onClick={handleResetAdrresInformation}>
                                 Alterar endereço
                                </ShowFormAddrress>
                            )
                        }
                    </FormProvider>
                    <PaymentsMethod/>
                </FormContainer>

                <FinalizePurchase>
                    <h1>Cafés selecionados</h1>
                    <section>
                        <ul>
                            {
                                coffeesInTrolley.map
                                (
                                    coffee => <Card key={coffee.id} props={coffee}/>
                                )
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
                        {
                            addreessInfromation 
                            ? (
                                <CofirmationButton onClick={handleFinishePurchase}>
                                Confirmar pedido
                                </CofirmationButton>
                            )

                            : <CofirmationButton type='submit'>Confirmar pedido</CofirmationButton>
                        }
                    </section>
                </FinalizePurchase>
            </form>
        </PurchaseContainer>
    )
}