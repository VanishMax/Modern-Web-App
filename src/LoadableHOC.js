import React from 'react'
import Loadable from 'react-loadable'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function LoadableHOC(opts) {
  return Loadable(Object.assign({
    loading: Loading,
    delay: 400
  }, opts))
}

function Loading(props) {
  if (props.error) {
    return <div></div>
  } else if (props.pastDelay) {
    return <CircularProgress color="primary"/>
  } else {
    return null
  }
}
