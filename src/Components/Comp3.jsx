import React, {useContext} from 'react'
import { userContext } from '../App'

function Comp3() {

    //const dataUser = useContext(userContext)
    const {name, email} = useContext(userContext)

  return (
    <div>
        <h3>Estamos en el Componente 3</h3>
        <p>El nombre de Usuario es {name}</p>
        <p>El correo de Usuario es {email}</p>
    </div>
  )
}

export default Comp3