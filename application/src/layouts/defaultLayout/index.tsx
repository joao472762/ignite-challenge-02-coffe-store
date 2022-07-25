import { DefaultLayoutContainer} from './style'
import { Outlet } from 'react-router-dom'

export  function DefaultLayout(){
    return(
        <DefaultLayoutContainer>
            <div>oi</div>
            <Outlet/>
        </DefaultLayoutContainer>
    )
}