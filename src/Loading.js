import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
  div: {
    width: '20%',
    margin: 'auto',
    transition: 'margin 1s',
    backgroundColor: 'lightgreen',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '3px'
  }
}

export default function Loading(props) {
  if (props.error) {
    return <div style={styles.div} onClick={ () => window.location.reload(true) } align="center">
      <h3>
        Please, click here or reload the page. New content is ready.
      </h3>
    </div>
  } else if (props.pastDelay) {
    return <CircularProgress color="primary"/>
  } else {
    return null
  }
}
