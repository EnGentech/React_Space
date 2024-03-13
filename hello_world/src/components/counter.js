// This file will create a React application to increament numbers by 1
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increament = () => {
        // this.setState(
        //     {
        //         count : this.state.count + 1
        //     }
        // )

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    // Lets try something by calling the increament function for 5 times
    increamentFive = () => {
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.increamentFive()}>Increament</button>
      </div>
    )
  }
}

export default Counter