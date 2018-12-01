import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './Header'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = {
  paper: {
    margin: "auto",
    marginTop: 20,
    width: "90%",
    padding: 15
  }
}

export default class About extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <Helmet>
          <title>Mobile About Page</title>
          <meta name="description" content="Mobile About Page" />
        </Helmet>
        <Paper elevation={4} style={styles.paper} align="center">
          <Typography variant="h5">About MWA</Typography>
          <br/>
        </Paper>
      </div>
    )
  }
}
