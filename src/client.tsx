import { After, ensureReady } from '@jaredpalmer/after';
import React from 'react';
import { Provider } from 'react-redux';

import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

import './client.css';
import configureStore from './common/configureStore';
import HomeContainer from './HomeContainer';

const store = configureStore({counter: 97});

ensureReady(routes).then((data) =>
  hydrate(
    <Provider store={store}>

      <BrowserRouter>
        {/* <div>CLIENT 1</div>, */}
        <After data={data} routes={routes}/>
        {/* <HomeContainer/> */}
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
);

if (module.hot) {
  module.hot.accept();
}
