import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Clientes from './Pages/Clientes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clientes" component={Clientes} />
      </Switch>
    </Router>
  );
}

export default App;
