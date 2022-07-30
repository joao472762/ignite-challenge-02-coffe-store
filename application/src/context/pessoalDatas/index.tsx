import { createContext, ReactNode, useEffect, useState} from "react";

export type paymentMethodProps =  'dinheiro' | 'crédito' | 'débito'

interface addreessInfromationProps{
    cep: string
    street: string
    houseNumber: number
    complement?: string 
    neighborhood: string
    city: string
    state: string
}

interface PessoalDatasProviderProps{
    children: ReactNode
}
interface PessoalDatasType {
    paymentMethod: paymentMethodProps | undefined
    addreessInfromation: addreessInfromationProps | undefined
    reseatAdrressInformations: () => void,
    callSetPaymentMethod: (method: paymentMethodProps) => void,
    createNewAddressInfromation: (data:addreessInfromationProps) => void,
}
export const PessoalDatas = createContext({} as PessoalDatasType)



export function PessoalDatasProvider({children}:PessoalDatasProviderProps){
    const [addreessInfromation, setAddresInformation] = useState<addreessInfromationProps | undefined>(()=>{
        const storage = localStorage.getItem('@coffe_store:address_information1.0.0')
        if(storage){
            return JSON.parse(storage)
        }
        return undefined
    })
    const [paymentMethod,setPaymentMethod] = useState<paymentMethodProps>()

    useEffect(()=>{
        const state = JSON.stringify(addreessInfromation)
        localStorage.setItem('@coffe_store:address_information1.0.0',state)
    },[addreessInfromation])

    function createNewAddressInfromation(data:addreessInfromationProps){
        setAddresInformation(data)
    }
    function reseatAdrressInformations(){
        setAddresInformation(() => undefined)
    }
    function callSetPaymentMethod(method:paymentMethodProps){
        setPaymentMethod(() => method)
    }


    return(
        <PessoalDatas.Provider value={
            {
                paymentMethod,
                addreessInfromation,
                callSetPaymentMethod,
                reseatAdrressInformations,
                createNewAddressInfromation,
            }
        }>
            {children}
        </PessoalDatas.Provider>
    )
}