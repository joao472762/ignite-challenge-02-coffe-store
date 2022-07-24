import { useEffect, useState } from 'react'
import  ReactSvg  from '../src/assets/expressoTradicional.svg'
import { COFFES_API } from './services/api'
interface Coffes {
  type: [],
  name: string,
  description: string,
  image: string
}
export function App(){
  const [coffes, setCoffes] = useState<Coffes[]>([])
  useEffect(()=>{
    fetch(COFFES_API)
    .then(response => response.json())
    .then(data => { setCoffes(()=> data)})
  },[])

  console.log(coffes)

  return(
    <div>
      i'm achieve in app component
    </div>
  )
}