import React from 'react'

const  ControlPresupuesto = ({presupuesto}) => {

   const formatearCant = (cantidad) => {
      return cantidad.toLocaleString('en-US', {
         style: 'currency',
         currency: 'USD'
      })
   }


   return (
      <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
         <div>
            <p>Grafico aqui</p>
         </div>
         <div className='contenido-presupuesto'>
            <p>
               <span>Presupuesto: </span> {formatearCant(presupuesto)}
            </p>
            <p>
               <span>Disponible: </span> {formatearCant(0)}
            </p>
            <p>
               <span>Gastado: </span> {formatearCant(0)}
            </p>
         </div>
      </div>
   )
}

export default ControlPresupuesto