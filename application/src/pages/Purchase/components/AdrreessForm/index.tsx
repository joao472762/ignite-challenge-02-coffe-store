import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { newAddressValidationSchemaData } from "../..";
import { AdrressFormContainer, Header, InputArea } from "./styles";

export function AdrressForm(){
    const {register} = useFormContext<newAddressValidationSchemaData>()
    return(
        <AdrressFormContainer>
            <Header>
                <MapPinLine/>
                <div>
                    <h2>Endereço de entrega</h2>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </Header>
            <InputArea>
                <input
                    {...register('cep',{required:true})}
                    type="text"
                    className='cep' 
                    placeholder='Cep' 
                />
                <input 
                    {...register('street',{required:true})}
                    type="text"
                    className='street' 
                    placeholder='Rua' 
                />
                <div>
                    <input
                        {
                            ...register('houseNumber',
                            {valueAsNumber:true,required:true})
                        }
                        type='number'
                        placeholder='Número da casa' 
                    />
                    <input 
                        {...register('complement')}
                        type="text" 
                        className='complement' 
                        placeholder='Complemento' 
                    />
                </div>
                <div>
                    <input
                        {...register('neighborhood')}
                        type="text" 
                        className='' 
                        placeholder='Bairro' 
                    />
                    <input
                        {...register('city')}
                        type="text" 
                        placeholder='Cidade' 
                    />
                    <input
                        {...register('state')}
                        type="text" 
                        placeholder='UF' 
                    />
                </div>
            </InputArea>
        </AdrressFormContainer>
    )
}