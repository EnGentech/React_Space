import React, { Component } from 'react';

const design = {
  backgroundColor: 'green',
  width: '30%',
  padding: '2px',
  borderRadius: '20px',
  color: 'blue',
  position: 'absolute', // Set position to 'absolute'
};

class Assignment3 extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        message: "Click me",
        xPosition: 0,
        yPosition: 0
    };
  }

  handleMouseClickMoveObject = (e) => {
    this.setState({
        xPosition: e.clientX,
        yPosition: e.clientY
    });
  }

  handleMouseHoverMoveObject = (e) => {
      
    let randomNumbersX = Math.floor(Math.random() * 800)
    let randomNumbersY = Math.floor(Math.random() * 500)

    this.setState({
        xPosition: randomNumbersX,
        yPosition: randomNumbersY
    })
  }

  render() {
    return (
      <div style={{ position: 'relative', width: '80vw', height: '80vh' }} onMouseOver={this.handleMouseHoverMoveObject}>
        <h1 style={{ ...design, left: this.state.xPosition, top: this.state.yPosition }}>30 days of React</h1>
        <h2 onClick={this.handleMouseHoverMoveObject}>{this.state.message}</h2>
      </div>
    );
  }
}

export default Assignment3;
