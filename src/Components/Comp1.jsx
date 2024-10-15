import React, {useContext} from 'react'
//importar el contexto creado en el archivo App.jsx (userContext)
import { userContext } from '../App'
import Comp2 from './Comp2'

function Comp1() {

    //Recibir el/los dato/s del contexto userContext
    //const user = useContext(userContext)
    //Desestructurar un objeto
    const {name, email} = useContext(userContext)

  return (
    <div>
        <h3>Estamos en el Componente 1</h3>
        <p>El nombre de Usuario es {name}</p>
        <p>El correo de Usuario es {email}</p>
        <Comp2/>
    </div>
  )
}

export default Comp1