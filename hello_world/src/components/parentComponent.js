// In this file, we will look at creating react application for props using methods

import React, { Component } from 'react'
import ChildComponent from './childComponent'

class parentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Gentle"
      }
    }

    greetParent = (childName) => {
        alert(`Hello ${this.state.parentName}, this is from ${childName}`)
    }

  render() {
    return (
      <div>
        <ChildComponent greetings={this.greetParent}/>
      </div>
    )
  }
}

export default parentComponent