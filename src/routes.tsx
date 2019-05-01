import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';
// tslint:disable:object-literal-sort-keys

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./HomeContainer'),
      Placeholder: () => <div>...LOADING...</div>,
    })
  },
  {
    path: '/about',
    exact: true,
    component: asyncComponent({
      loader: () => import('./About'), // required
      Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    })
  },
];
