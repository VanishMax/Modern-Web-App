import MobileDetect from 'mobile-detect'
import { matchPath } from "react-router-dom";
import ssr from './server'
import configureStore from '../src/redux/configureStore'
import routes from '../src/app/routes'

export default function (app) {
  app.get('*', (req, res) => {
    const store = configureStore();
    const dataRequirements = routes
      .filter(route => matchPath(req.url, route)) // filter matching paths
      .map(route => {
        return route.serverFetch ? route.serverFetch(store) : null;
      }); // map to components

    Promise.all(dataRequirements).then(() => {
      const md = new MobileDetect(req.headers['user-agent'])
      const response = ssr(req.url, store, md.mobile())
      res.send(response)
    });
  })
}
