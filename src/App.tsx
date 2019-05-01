import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

export const App = () => (
  <Switch>
    {routes.map((route) => <Route exact={true} key={'route'} component={route.component} />)}
    {/* <Route exact={true} path="/" component={Home} /> */}
  </Switch>
);

// export default App;
