import React from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions'

class SmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    addButton = e => {
        e.preventDefault()
        this.props.addSmurf(this.state)
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.addButton}>
                <input 
                    name='name'
                    value={this.state.name}
                    type='text'
                    placeholder='Name'
                    onChange={this.handleChange}
                />
                <input 
                    name='age'
                    value={this.state.age}
                    type='number'
                    placeholder='Age'
                    onChange={this.handleChange}
                />
                <input 
                    name='height'
                    value={this.state.height}
                    type='number'
                    placeholder='Height'
                    onChange={this.handleChange}
                />
                
                <button>Add Smurf</button>
            </form>
        )
    }
}

export default connect(null, { addSmurf })(SmurfForm)
