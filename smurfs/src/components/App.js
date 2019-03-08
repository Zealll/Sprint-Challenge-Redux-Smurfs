import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from '../actions'
import { connect } from 'react-redux'
import Smurf from './Smurf'
import SmurfForm from './SmurfForm'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <SmurfForm />
        {this.props.smurfs.map(smurf => {
          return <Smurf smurf={smurf} key={smurf.id} />
        })}
      </div>
    );
  }
}

function mapStateToPropsBanana(state) {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToPropsBanana, { getSmurfs })(App)
