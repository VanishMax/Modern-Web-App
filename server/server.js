import React from 'react'
import { renderToString } from 'react-dom/server'

import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
import stats from '~/public/react-loadable.json'

import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '~/src/redux/configureStore'
import { Helmet } from 'react-helmet'

import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName'
import purple from '@material-ui/core/colors/purple'

import App from '&/app/App'
import MobileApp from '&/mobileApp/App'
import template from './template'

export default function render(url, store, mobile) {
  const reactRouterContext = {}
  const sheetsRegistry = new SheetsRegistry()
  const sheetsManager = new Map()
  const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: {
        main: '#f44336',
      },
    },
    typography: {
      useNextVariants: true,
    },
  })
  const generateClassName = createGenerateClassName()

  let modules = []

  let content = renderToString(
    <StaticRouter location={url} context={reactRouterContext}>
      <Provider store={store} >
        <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
          <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
            <Loadable.Capture report={moduleName => modules.push(moduleName)}>
              {mobile === null ? <App/> : <MobileApp/> }
            </Loadable.Capture>
          </MuiThemeProvider>
        </JssProvider>
      </Provider>
    </StaticRouter>
  )

  let bundles = getBundles(stats, modules)
  const helmet = Helmet.renderStatic()
  const state = store.getState()

  state.mobile = mobile

  return template(sheetsRegistry, helmet, state, content, bundles)
}
