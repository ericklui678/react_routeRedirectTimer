import React, { Component } from 'react';

export default class CoffeeScript extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      counter: 5
    }
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    console.log('mounting');
    this.myInterval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    console.log('unmounting');
    clearInterval(this.myInterval);
  }

  tick() {
    console.log('counter in tick', this.state.counter);
    if (this.state.counter === 0) {
      this.props.history.push('/');
      return;
    }
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    console.log('rendered', this.state.counter);
    return (
      <div>
        CoffeeScript is a programming language that transcompiles to JavaScript, so we'll be redirectly back to JavaScript in {this.state.counter}
      </div>
    );
  }
}
