import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute title='App' component={Home} />
    <Route path='home' title='Home' component={Home} />
  </Route>
);

export default routes;
