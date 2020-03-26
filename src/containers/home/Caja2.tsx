import React, { useContext, useState } from 'react'
import {ThemeContext} from '../../contex';

const Caja2 = () => {
  const context = useContext(ThemeContext);
  const [state, setState] = useState('');

  return (
    <div className="container card p-2">
      <h6>Hijo 2</h6>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            className='form-control my-5'
            value={context.name}
            placeholder='Escribe un nombre'
            onChange={e => context.changeName(e.target.value)}
          />
          <p className="text-center">Nombre: {context.name}</p>
        </div>
        <div className="col-6">
          <input
            type="text"
            className='form-control my-5'
            value={state}
            placeholder='Otro nombre'
            onChange={e => setState(e.target.value)}
          />
          <p className="text-center">Input con state independiente del context</p>
        </div>
      </div>
    </div>
  )
}

export default Caja2;
