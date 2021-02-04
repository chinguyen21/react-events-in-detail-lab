// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {
  render(){
    return (
      <button
      onClick={(event) => {
        event.persist();
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
        }}>Coordinates
      </button>
    )
  }
}

export default CoordinatesButton;