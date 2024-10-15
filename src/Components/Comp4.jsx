import React, {useContext} from 'react'
import { prodContext } from '../App'
import { userContext } from '../App'

function Comp4() {

    const {idProd, nameProd, priceProd} = useContext(prodContext)
    const {name, email} = useContext(userContext)

  return (
    <div>
        <h3>Estamos en el Componente 4</h3>
        <p>El nombre de Usuario es {name}</p>
        <h2>Datos del Producto</h2>
        <ul>
            <li>{idProd}</li>
            <li>{nameProd}</li>
            <li>{priceProd}</li>
        </ul>
    </div>
  )
}

export default Comp4