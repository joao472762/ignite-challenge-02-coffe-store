import { DefaultLayoutContainer} from './style'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export  function DefaultLayout(){
    return(
        <DefaultLayoutContainer>
            <Header/>
            <Outlet/>
        </DefaultLayoutContainer>
    )
}