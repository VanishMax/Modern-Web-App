import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = {
  drawer: {
    width: 250
  },
  head: {
    marginTop: 15,
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    fontSize: 25
  }
}

export default class Header extends React.Component{
  constructor(){
    super()
    this.state = {
      opened: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }
  toggleDrawer(){
    this.setState({opened: !this.state.opened})
  }
  render(){
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" aria-label="Menu" onClick={this.toggleDrawer}
                    style={styles.menuButton}>&#9776;</Button>
            <Typography variant="h6" color="inherit">
              Mobile MWA
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer onClose={this.toggleDrawer} onOpen={this.toggleDrawer}
                         open={this.state.opened}>
          <div style={styles.drawer}>
            <Typography variant="h5" style={styles.head}>
              Modern Web App
            </Typography>
            <Divider/>
            <List align="center">
              <Link to="/" style={styles.link}>
                <ListItem button>
                  <ListItemText primary="Main Page" />
                </ListItem>
              </Link>
              <Link to="/about" style={styles.link}>
                <ListItem button>
                  <ListItemText primary="About project" />
                </ListItem>
              </Link>
            </List>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    )
  }
}
