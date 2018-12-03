import express from 'express'
import path from 'path'
import Loadable from 'react-loadable'
import stateRoutes from './server/stateRoutes'

const app = express()

// Serving static files
app.use(express.static('public'))
app.use('/assets', express.static(path.resolve(__dirname, 'assets')))

const PORT = process.env.PORT || 3000
Loadable.preloadAll().then(() => app.listen(PORT, '0.0.0.0', () => {
  console.log(`The app is running in PORT ${PORT}`)
}))

stateRoutes(app)
