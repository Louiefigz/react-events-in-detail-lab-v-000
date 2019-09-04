// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends Component {

    handleClick(event) {
      this.props.onReceiveCoordinates = 
    }
    
    onReceiveCoordinates(event) {
      const pointer = [event.clientX, event.clientY]
      
      return pointer
    }

    
    render() {
      return (
        <button onClick={this.props.onReceiveCoordinates}></button>
        )
    }
    
}
