import React from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal}) => {

   const ocultarModal  = () => {
      setModal(false)
   }

   return (
      <div className='modal'>  
         <div className='cerrar-modal'>
            <img
               src={CerrarBtn}
               className='cerrar modal'
               onClick={ocultarModal}
            />
         </div>

         <form className={`formulario ${animarModal ? "animar" : '' }`}>
            <legend>Nuevo gasto</legend>
            <div className='campo'>
               <label htmlFor='nombre'>Nombre Gasto</label>
               <input
                  id='nombre'
                  type="text"
                  placeholder='Anade el nombre del gasto'
               />
            </div>
            <div className='campo'>
               <label htmlFor='cantidad'>Cantidad</label>
               <input
                  id='cantidad'
                  type="number"
                  placeholder='Anade la cantidad del gasto: ej. 300'
               />
            </div>
            <div className='campo'>
               <label htmlFor='categoria'>Categoria</label>
               <select
                  id='categoria'
               >
                  <option value="">-- Seleccione --</option>
                  <option value="ahorro">Ahorro</option>
                  <option value="comida">Comida</option>
                  <option value="casa">Casa</option>
                  <option value="gastos">Gastos varios</option>
                  <option value="ocio">Ocio</option>
                  <option value="salud">Salud</option>
                  <option value="Suscripciones">Suscripciones</option>
               </select>
            </div>
            <input
               type="submit"
               value="Anadir gastos"
            />
         </form>
      </div>
   )
}

export default Modal;
