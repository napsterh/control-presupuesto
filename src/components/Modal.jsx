import React from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal}) => {

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
      </div>
   )
}

export default Modal;
