import express from 'express'
import path from 'path'
import Loadable from 'react-loadable'

var app = express()

// Serving static files
app.use(express.static("public"))
app.use('/assets', express.static(path.resolve(__dirname, "assets")))

app.disable('x-powered-by')

var PORT = process.env.PORT || 3000
Loadable.preloadAll().then(() => app.listen(PORT, '0.0.0.0', function () {
  console.log("The app is running in PORT " + PORT)
}))

import stateRoutes from './server/stateRoutes'
stateRoutes(app)