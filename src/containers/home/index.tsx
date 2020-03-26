import React, { useState } from 'react';
import {ThemeContext} from '../../contex';
import Caja1 from './Caja1';
import Caja2 from './Caja2';
import Caja3 from './Caja3';

const Home = () => {
  const [state, setState] = useState('');

  return (
      <div className="container" style={{padding: '50px'}}>
        <h2>Jugando con Context</h2>
        <p className="text-justify">Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel. También podemos pasar una función para actualizar el valor de context desde los componente hijos, como se ve en <i>Hijo 2</i>.  Si un componente no tiene un provider, obtiene el valor por defecto, como en <i>Hijo 3.</i> </p>

        <form className='px-5 py-3 card'>
          <h3 className='mb-2'>Componente padre</h3>
          <input
            type="text"
            className='form-control'
            value={state}
            placeholder='Escribe un nombre'
            onChange={e => setState(e.target.value)}
          />
        </form>
        <ThemeContext.Provider
          value={
            {
              name: state,
              changeName: function(name: string) {setState(name)}
            }
          }>
          <Caja1 />
          <Caja2 />
        </ThemeContext.Provider>
        <Caja3 />
      </div>
  )
};

export default Home;
