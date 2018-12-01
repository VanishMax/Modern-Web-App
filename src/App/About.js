import React from 'react'
import Header from './Header'
import Typography from '@material-ui/core/Typography'
import { Helmet } from 'react-helmet'
import Paper from '@material-ui/core/Paper/Paper'

const styles = {
  paper: {
    margin: "auto",
    marginTop: 200,
    width: "40%",
    padding: 15
  }
}

export default function About() {
  return (
    <React.Fragment>
      <Helmet>
        <title>MWA - About</title>
        <meta name="description" content="Modern Web App - About Page" />
      </Helmet>
      <Header/>
      <Paper elevation={4} style={styles.paper} align="center">
        <Typography variant="h5">About MWA</Typography>
      </Paper>
    </React.Fragment>
  )
}
