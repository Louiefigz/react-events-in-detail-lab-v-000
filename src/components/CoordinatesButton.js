// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends Component {

    handleClick(event) {
      this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    render() {
      return (
        <button 
        onClick={this.props.onReceiveCoordinates}></button>
        )
    }
    
}
