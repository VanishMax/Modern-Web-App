import React, {Component} from 'react'
import { Switch, Route } from 'react-router'
import Loadable from "react-loadable"
import Loading from '~/src/Loading'

const AsyncHome = Loadable({
  loader: () => import(/* webpackChunkName: "MobileHome" */ './Home'),
  loading: Loading,
  delay: 300,
})

class App extends Component {

  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }


  render() {
    return(
      <Switch>
        <Route exact path="/" component={AsyncHome}/>
      </Switch>
    )
  }
}

export default App