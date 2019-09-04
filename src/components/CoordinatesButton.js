// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends Component {
  contructor(props) {
    super(props)
    
    onReceiveCoordinates(event) {
      const pointer = [event.clientX 
    }
    
    render(props) {
      return (
        <button onClick={this.props.onReceiveCoordinates}></button>
        )
    }
    
  }
}