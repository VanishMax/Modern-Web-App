import React from 'react'
import Header from './Header'
import Typography from '@material-ui/core/Typography'
import { Helmet } from 'react-helmet'
import Paper from '@material-ui/core/Paper/Paper'

const styles = {
  paper: {
    margin: 'auto',
    marginTop: 50,
    paddingTop: 10,
    width: '60%'
  },
  img: {
    width: '100%',
    marginBottom: 5
  },
  typography: {
    marginBottom: 15
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
        <Typography variant="h5" style={styles.typography}>About MWA</Typography>
        <img src="/assets/MWA.png" alt="MWA (Modern Web App) is a new way to build your web apps" style={styles.img}/>
        <Typography variant="subtitle1">
          Learn more about it <a href="https://github.com/vanishmax/modern-web-app" target="_blank"> here - GitHub</a>
        </Typography>
      </Paper>
    </React.Fragment>
  )
}
