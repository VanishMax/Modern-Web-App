import React from 'react'
import { serverFetch as homeFetch } from './Home/serverFetch'

import LoadableHOC from '&/LoadableHOC'
const AsyncHome = LoadableHOC({ loader: () => import(/* webpackChunkName: 'Home' */ './Home') })
const AsyncAbout = LoadableHOC({ loader: () => import(/* webpackChunkName: 'About' */ './About') })

export default [
  {
    path: '/',
    component: AsyncHome,
    serverFetch: homeFetch,
    exact: true
  },
  {
    path: '/about',
    component: AsyncAbout,
    exact: true
  },
]
