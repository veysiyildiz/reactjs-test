import React from "react";
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ModelerPage from './pages/ModelerPage';
import FrameworksPage from './pages/FrameworksPage';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <hr />
      <Switch>
          <Route exact key='home' path='/' component={HomePage} />
          <Route exact key='modeler' path='/modeler' component={ModelerPage} />
          <Route exact key='frameworks' path='/frameworks' component={FrameworksPage} />
      </Switch>
    </div>
  )
};

export default App;