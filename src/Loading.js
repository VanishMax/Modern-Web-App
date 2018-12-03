import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'

export default function Loading(props) {
  if (props.error) {
    return <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={props.error} autoHideDuration={null}
      ContentProps={{ 'aria-describedby': 'message-id' }}
      message={<span id="message-id">Please, refresh the page</span>}
      action={[
        <Button key="undo" color="secondary" onClick={ () => window.location.reload(true) }>
          Refresh
        </Button>
      ]}
    />
  } else if (props.pastDelay) {
    return <CircularProgress color="primary"/>
  } else {
    return null
  }
}
