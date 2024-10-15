import { useState, createContext } from 'react'
import Comp1 from './Components/Comp1'
import Comp4 from './Components/Comp4';
import './App.css'

//se genera el contexto  con el nombre de userContext y se podrá utilizar en otros componentes
export const userContext = createContext();
export const prodContext = createContext();

function App() {

  const [user, setUser] = useState({
    name: 'Argemiro Buena Vida',
    email: 'ArgBvida@gmail.com'
  })

  const [prod, setProd] = useState({
    idProd: '01',
    nameProd: 'Teclado Rgb',
    priceProd: 220000
  })

  return (
    <>
     <h2>Demostracion del hook useContext</h2>
     <userContext.Provider value={user}>
      <prodContext.Provider value = {prod}>
          <Comp4/>
          <Comp1/>
      </prodContext.Provider>
     </userContext.Provider>

     
    </>
  )
}

export default App
