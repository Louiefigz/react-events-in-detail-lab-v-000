// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleClick = (event) => {
      event.persist()
      setTimeout()
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
