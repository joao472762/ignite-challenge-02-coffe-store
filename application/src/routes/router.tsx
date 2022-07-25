import {BrowserRouter,Route, Routes} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Purchase } from '../pages/Purchase'
import { Farewell } from '../pages/farewell'
import { DefaultLayout } from '../layouts/defaultLayout'

export function Router(){
   return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultLayout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/compra' element={<Purchase/>}/>
                    <Route path='/entrega' element={<Farewell/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}