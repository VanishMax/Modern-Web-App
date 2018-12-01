import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" style={{marginLeft: -12, marginRight: 20}}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          News
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
