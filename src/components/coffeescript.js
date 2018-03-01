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
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });


  }

  componentWillUnount() {
    this.clearInterval(this.state.timer);
  }

  tick() {
    if (this.state.counter === 0) {
      this.props.history.push('/');
      return;
    }

    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        CoffeeScript is a programming language that transcompiles to JavaScript, so we'll be redirectly back to JavaScript in {this.state.counter}
      </div>
    );
  }
}
