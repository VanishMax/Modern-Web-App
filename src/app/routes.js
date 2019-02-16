import Loadable from 'react-loadable';
import React from 'react';
import { serverFetch as homeFetch } from './Home/serverFetch';

const AsyncHome = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */ './Home'),
  loading: () => <div>123</div>,
  delay: 300,
});

const AsyncAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'About' */ './About'),
  loading: () => <div>123</div>,
  delay: 300,
});

export default [
  {
    path: '/',
    component: AsyncHome,
    serverFetch: homeFetch,
    exact: true,
  },
  {
    path: '/about',
    component: AsyncAbout,
    exact: true,
  },
];
