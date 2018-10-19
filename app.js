import express from 'express'
import path from 'path'
import MobileDetect from 'mobile-detect'
import Loadable from 'react-loadable'
import template from '~/views/server/template'
import ssr from '~/views/server/server'

var app = express()

// Serving static files
app.use(express.static("public"))
app.use('/assets', express.static(path.resolve(__dirname, "assets")))

app.disable('x-powered-by')

var PORT = process.env.PORT || 3000
Loadable.preloadAll().then(() => app.listen(PORT, '0.0.0.0', function () {
  console.log("The app is running in PORT " + PORT)
}))


let initialState = {
  isFetching: false,
  mobile: null,
  count: 5
}

// server rendered home page
app.get('*', (req, res) => {
  let md = new MobileDetect(req.headers['user-agent']);
  if(md.mobile() !== null){
    initialState.mobile = md.mobile();
  }
  const response = ssr(req, res, initialState)
  res.send(response)
})