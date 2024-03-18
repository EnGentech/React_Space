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
      xPosition: 0,
      yPosition: 0
    };
  }

  handleMouseMove = (e) => {
    this.setState({
      xPosition: e.clientX,
      yPosition: e.clientY
    });
  }

  render() {
    return (
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }} onClick={this.handleMouseMove}>
        <h1 style={{ ...design, left: this.state.xPosition, top: this.state.yPosition }}>30 days of React</h1>
      </div>
    );
  }
}

export default Assignment3;
