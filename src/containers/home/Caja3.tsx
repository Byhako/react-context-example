import React, { useContext } from 'react'
import {ThemeContext} from '../../contex';

const Caja3 = () => {
  const context = useContext(ThemeContext);
  return (
    <div className="container card mt-2 p-2">
      <h6>Hijo 3</h6>
      <p className="text-center">Nombre: {context.name}</p>
    </div>
  )
}

export default Caja3;
