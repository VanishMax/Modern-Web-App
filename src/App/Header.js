import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


export default function Header(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" style={{marginLeft: -12, marginRight: 20}}>
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          News
        </Typography>
      </Toolbar>
    </AppBar>
  )
}