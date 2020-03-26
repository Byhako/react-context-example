import React, { useContext } from 'react'
import {ThemeContext} from '../../contex';

const Caja1 = () => {
  const context = useContext(ThemeContext);
  return (
    <div className="container card my-2 p-2">
      <h6>Hijo 1</h6>
      <p className="text-center">Nombre: {context.name}</p>
    </div>
  )
}

export default Caja1;
