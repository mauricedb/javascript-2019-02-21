import React, { Component } from 'react';

class Clock extends Component {
  state = {
    now: new Date()
  };

  componentDidMount() {
    this.handle = setInterval(() => {
      this.setState({
        now: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    const { now } = this.state;

    if (now.getSeconds() % 2 === 0) {
      return null;
    }

    return <div className="een-class" style={{color:'red'}}>Het is : {now.toLocaleTimeString()}</div>;
  }
}

export default Clock;
