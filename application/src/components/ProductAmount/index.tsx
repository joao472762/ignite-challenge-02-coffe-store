import { AddButton, MinusButton, PruoductAmountContainer } from "./styles";

export function PruoductAmount(){
    return(
        <PruoductAmountContainer>
            <MinusButton/>
            <input type="number" maxLength={1} defaultValue={1}/>
            <AddButton/>
        </PruoductAmountContainer>
    )
}