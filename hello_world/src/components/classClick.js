import React, { Component } from 'react'

class classClick extends Component {

    clickButton(){
        console.log("You have clicked a class handler")
    }

  render() {
    return (
      <div>
        <button onClick={this.clickButton}>Click me</button>
      </div>
    )
  }
}

export default classClick