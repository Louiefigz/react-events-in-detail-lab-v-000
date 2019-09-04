// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleClick(event) {
      this.props.onDelayedClick([event.clientX, event.clientY])
    }
    
    render() {
      return (
        <button 
        onClick={this.handleClick}>
        Coords
        </button>
        )
    }
    
}
