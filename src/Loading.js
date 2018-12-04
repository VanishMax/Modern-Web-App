import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

export default function Loading(props) {
  if (props.error) {
    return <Dialog
      open={props.error} onClose={null} style={{backgroundColor: 'white !IMPORTANT'}}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"New content"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          New content of the Modern Web App has arrived. Please, refresh the page
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={ () => window.location.reload(true) }>
          Refresh
        </Button>
      </DialogActions>
    </Dialog>
  } else if (props.pastDelay) {
    return <CircularProgress color="primary"/>
  } else {
    return null
  }
}
