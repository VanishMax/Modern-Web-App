import React from 'react'
import { renderToString } from 'react-dom/server'

import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
import stats from '~/public/react-loadable.json'

import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '~/src/redux/configureStore'
import App from '~/src/App/app'
import MobileApp from '~/src/MobileApp/app'

import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import {
    MuiThemeProvider,
    createMuiTheme,
    createGenerateClassName,
} from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

import {Helmet} from "react-helmet"

import template from './template'



export default function render(req, res, initialState) {

  const reactRouterContext = {}

  const sheetsRegistry = new SheetsRegistry()
  const sheetsManager = new Map()
  // Create a theme instance.
 const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: {
        main: '#f44336',
      },
    },
  })
  const generateClassName = createGenerateClassName()

  const store = configureStore(initialState)

  let modules = []

  // render the App store static markup ins content variable
  let content = renderToString(
    <StaticRouter location={req.url} context={reactRouterContext}>
      <Provider store={store} >
        <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
          <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
            <Loadable.Capture report={moduleName => modules.push(moduleName)}>
              {initialState.mobile === null ? <App/> : <MobileApp/> }
            </Loadable.Capture>
          </MuiThemeProvider>
        </JssProvider>
      </Provider>
    </StaticRouter>
  )

  let bundles = getBundles(stats, modules)

  const preloadedState = store.getState()

  const helmet = Helmet.renderStatic()

  return template(sheetsRegistry, helmet, initialState, content, bundles)
}
