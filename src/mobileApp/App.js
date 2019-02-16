import React from 'react'
import { Switch, Route } from 'react-router'

import LoadableHOC from '&/LoadableHOC'
const AsyncHome = LoadableHOC({ loader: () => import(/* webpackChunkName: "MobileHome" */ './Home') })
const AsyncAbout = LoadableHOC({ loader: () => import(/* webpackChunkName: "MobileAbout" */ './About') })

export default function MobileApp() {
  return(
    <Switch>
      <Route exact path="/" component={AsyncHome}/>
      <Route exact path="/about" component={AsyncAbout}/>
    </Switch>
  )
}
