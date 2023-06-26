import React from 'react'

function NuevoPresupuesto({presupuesto, setPresupuesto}) {
   return (
      <div className='contenedor-presupuesto contenedor sombra'>
         <form className='formulario'>
            <div className='campo'>
               <label>Definir presupuesto</label>
               <input
                  className='nuevo-presupuesto'
                  type="text"
                  placeholder='Añade tu presupuesto'
                  value={presupuesto}
                  onChange={ e => setPresupuesto(e.target.value) }
               />
            </div>
            <input type="submit" value="Añadir"/>
         </form>
      </div>
   )
}

export default NuevoPresupuesto