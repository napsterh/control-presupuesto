import React, {useEffect, useState} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const  ControlPresupuesto = ({gastos, presupuesto}) => {

   const [ disponible, setDisponible ] = useState(0)
   const [ gastado, setGastado ] = useState(0)

   useEffect(() => {
      const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)
      const totalDisponible = presupuesto - totalGastado

      setGastado(totalGastado)
      setDisponible(totalDisponible) 
   }, [gastos])
   

   const formatearCant = (cantidad) => {
      return cantidad.toLocaleString('es-PE', {
         style: 'currency',
         currency: 'PER'
      })
   }


   return (
      <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
         <div>
            <CircularProgressbar
               value={50}
            />
         </div>
         <div className='contenido-presupuesto'>
            <p>
               <span>Presupuesto: </span> {formatearCant(presupuesto)}
            </p>
            <p>
               <span>Disponible: </span> {formatearCant(disponible)}
            </p>
            <p>
               <span>Gastado: </span> {formatearCant(gastado)}
            </p>
         </div>
      </div>
   )
}

export default ControlPresupuesto