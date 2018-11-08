import MobileDetect from "mobile-detect"
import ssr from './server'

let initialState = {
  isFetching: false,
  mobile: null,
  count: 5
}

export default function(app){
  app.get('*', (req, res) => {
    let md = new MobileDetect(req.headers['user-agent']);
    if(md.mobile() !== null){
      initialState.mobile = md.mobile();
    }
    const response = ssr(req, res, initialState)
    res.send(response)
  })
}
