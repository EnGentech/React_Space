import React, { Component } from 'react'

export class eventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

      this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage(){
        this.setState(
            {message: "Goodbye"}
        )
    }

    arrowFnx = () => {
        this.setState({
            message: "Goodbye from Arrow Function!"
        })
    }

  render() {
    return (
      <div>
        <h1>{ this.state.message }</h1>
        <button onClick={this.changeMessage.bind(this)}>Event Click</button>
        {/* we can also use the second method as shown below (this uses the arrow function method) */}
        <button onClick={() => this.changeMessage()}>Event Click two</button>

        {/* the third approach is to set the binder in the constructor, this is the most prefered as documented in react */}
        <button onClick={this.changeMessage}>Constructor bind Click</button>

        {/* The last approach is to write the method using an arrow function, I think this is the best approach in respect to time */}
        <button onClick={this.arrowFnx}>Arrow Function Click</button>
      </div>
    )
  }
}

export default eventBind