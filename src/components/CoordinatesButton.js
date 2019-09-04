// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends Component {

        
        this.onReceiveCoordinates = this.props.onReceiveCoordinates.bind(this);
    
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
