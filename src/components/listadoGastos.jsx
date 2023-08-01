import React from 'react'
import Gasto from './Gasto'

const listadoGastos = ({gastos, setGastoEditar, eliminarGasto}) => {
   return (
      <div className='listado-gastos contenedor'>
         <h2>{gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>

         {gastos.map( gasto => (
            <Gasto 
               key={gasto.id}
               gasto={gasto}
               setGastoEditar={setGastoEditar}
               eliminarGasto={eliminarGasto}
            />
         ))}
      </div>
   )
}

export default listadoGastos