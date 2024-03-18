// this file handles lots of javaScript codes on event handling to include writing to the webpage the key a user press using e.target.value
import React, { Component } from 'react'

class eventHandler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         keypress: "",
         message: ""
      }
    }
   
    basicStyle = {
        width: "100%",
        height: "500px"        
    }

   buttonClickEffect = (e) => {
     let message = "You have clicked the button"
     console.log(e.target)
     this.setState(
        {message: `Hello! ${message}`}
     )
   }

   movingMouse = (e) => {
    let message = "Mouse is moving"
    this.setState(
        {message: `Hello! ${message}`}
    )
   }
   
   keypressFunction = (e) => {
    this.setState(
        {
            name: e.target.value,
            message: e.target.value
        }
    ) 
   }

   copyRight = (e) => {
    e.preventDefault()
    this.setState(
        {
            message: "You are not allowed to copy this text"
        }
    )
   }
   
   

  render() {
    return (
      <div>
        <h2>Event tracker</h2>
        <h3>{this.state.message}</h3>
        <button onClick={this.buttonClickEffect}>Click me</button>
        <div style={this.basicStyle} onMouseMove={this.movingMouse} />
        <input type="text" onKeyUp={this.keypressFunction} />
        <p onCopy={this.copyRight}>Try to copy this text let's see the output</p>
      </div>
    )
  }
}

export default eventHandler