import React, {useContext} from 'react'
import { userContext } from '../App'
import Comp3 from './Comp3'

function Comp2(){

    //const myUser = useContext(userContext)
    const {name, email} = useContext(userContext)

  return (
    <div>
        <h3>Estamos en el Componente 2</h3>
        <p>El nombre de Usuario es {name}</p>
        <p>El correo de Usuario es {email}</p>
        <Comp3/>
    </div>
  )
}

export default Comp2