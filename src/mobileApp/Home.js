import React from 'react'
import { Helmet } from 'react-helmet'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '&/redux/actions'

import Header from './Header'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  paper: {
    margin: "auto",
    marginTop: 20,
    width: "90%",
    padding: 15
  },
  btnLeft: {
    marginRight: 20
  },
  img: {
    width: 100,
    marginBottom: 5,
    display: "block"
  }
}

class Home extends React.Component{
  constructor(){
    super()
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }
  componentDidMount() {
    if(!this.props.corgi) {
      this.props.actions.getCorgi()
    }
  }
  increase(){
    this.props.actions.increase()
  }
  decrease(){
    this.props.actions.decrease()
  }
  render(){
    return (
      <div>
        <Header/>
        <Helmet>
          <title>VaMax Mobile</title>
          <meta name="description" content="VaMax Mobile App" />
        </Helmet>
        <Paper elevation={4} style={styles.paper} align="center">
          <img src={this.props.corgi} style={styles.img} alt=""/>
          <Typography variant="h5">Redux-Counter</Typography>
          <Typography variant="subtitle1">Counter: {this.props.count}</Typography>
          <br/>
          <Button variant="contained" color="primary" onClick={this.increase} style={styles.btnLeft}>Increase</Button>
          <Button variant="contained" color="primary" onClick={this.decrease}>Decrease</Button>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
  corgi: state.corgi
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
