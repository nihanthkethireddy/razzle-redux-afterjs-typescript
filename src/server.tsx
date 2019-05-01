import { render } from '@jaredpalmer/after';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import configureStore from './common/configureStore';
import routes from './routes';

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', async (req: express.Request, res: express.Response) => {
    const context = {};
    const counter = 100;
    const preloadedState = { counter };
    const serverStore = configureStore(preloadedState);
    const customRenderer = (node: any) => {
      return {
        html: renderToString(
          <StaticRouter context={context} location={req.url}>
            <Provider store={serverStore}>
              {node}
            </Provider>
          </StaticRouter>
        ),
      serverState: serverStore.getState()
      };
    };
    try {
      const html = await render({
        assets,
        customRenderer,
        req,
        res,
        routes
      });
      res.send(html);
    } catch (error) {
      console.log(error, 'ERR');
      res.json(error);
    }
  });

export default server;
