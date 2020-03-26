import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='' component={NofoundPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
