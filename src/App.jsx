import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import ListadoGastos from '../src/components/ListadoGastos'
import Modal from '../src/components/Modal'
import { generarId } from './helpers'  

function App() {
  
  const [ presupuesto, setPresupuesto ] = useState(0)
  const [ isValidPresupuesto, setIsValidPresupuesto ] = useState(false)

  const [ modal, setModal ] = useState(false)
  const [ animarModal, setAnimarModal ] = useState(false)
  const [ gastos, setGastos ] = useState([])

  const handleNuevoGasto = () => {
    setModal(true)
    
    setTimeout(() => { 
      setAnimarModal(true)
    }, 1000);
  } 

  const guardarGasto = gasto => {
    gasto.id = generarId();
    setGastos([...gastos, gasto])

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  return (
    <div>
        <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        />

        {isValidPresupuesto && (
          <>
            <main>
              <ListadoGastos
                gastos={gastos}
              />
            </main>
            <div className='nuevo-gasto'>
              <img
                src={IconoNuevoGasto}
                alt='icono nuevo gasto'
                onClick={handleNuevoGasto}
              />
            </div>
          </>
        )}

        {modal && <Modal
          setModal={setModal}
          animarModal={animarModal}
          guardarGasto={guardarGasto}
        /> }
    </div>
  )
}

export default App
