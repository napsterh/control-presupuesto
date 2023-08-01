import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import ListadoGastos from '../src/components/ListadoGastos'
import Modal from '../src/components/Modal'
import { generarId } from './helpers'  

function App() {

  const [ gastos, setGastos ] = useState([])
  
  const [ presupuesto, setPresupuesto ] = useState(0)
  const [ isValidPresupuesto, setIsValidPresupuesto ] = useState(false)

  const [ modal, setModal ] = useState(false)
  const [ animarModal, setAnimarModal ] = useState(false)

  const [ gastoEditar, setGastoEditar ] = useState({})

  useEffect(() => {
    if( Object.keys(gastoEditar).length > 0 ){
      setModal(true)
      
      setTimeout(() => { 
        setAnimarModal(true)
      }, 500);
    }
  }, [gastoEditar])
  

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
    
    setTimeout(() => { 
      setAnimarModal(true)
    }, 500);
  } 

  const guardarGasto = gasto => {
    if(gasto.id){
      const gastosActualizado = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState  ) 
      setGastos(gastosActualizado )
      setGastoEditar({})
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

      setAnimarModal(false)
      setTimeout(() => {                                                                                                                                                                
        setModal(false)
      }, 500);
  }
    
  const eliminarGasto = (id) => {
    const gastosUpdate = gastos.filter( gasto => gasto.id !== id  )
    setGastos(gastosUpdate)
  }

  return (
    <div className={modal && 'fijar'}>
        <Header
        gastos={gastos}
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
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
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
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
        /> }
    </div>
  )
}

export default App
