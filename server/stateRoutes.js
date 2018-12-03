import MobileDetect from 'mobile-detect'
import ssr from './server'

const initialState = {
  mobile: null,
  count: 5,
}

export default function (app) {
  app.get('*', (req, res) => {
    const md = new MobileDetect(req.headers['user-agent'])
    const response = ssr(req.url, initialState, md.mobile())
    res.send(response)
  })
}
