import React from 'react'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions'

const Smurf = props => {
    const handleClick = () => {
        props.deleteSmurf(props.smurf.id)
    }

    return (
        <div className='list'>
            <div className='chars'>
                <strong>Name:</strong> {props.smurf.name}
            </div>
            <div className='chars'>
                <strong>Age:</strong> {props.smurf.age}
            </div>
            <div className='chars'>
                <strong>Height:</strong> {props.smurf.height}
            </div>
            
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default connect(null, { deleteSmurf })(Smurf) 