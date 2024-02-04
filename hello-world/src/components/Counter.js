import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increaseCounter() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value ", this.state.count);
    //   }
    // );

    this.setState((prevState,props) => ({
      count: prevState.count + 1,
    }),
    ()=>{console.log("Callback value ",this.state.count)});
  }

  increaseCounterByFive() {
    this.increaseCounter();
    this.increaseCounter();
    this.increaseCounter();
    this.increaseCounter();
    this.increaseCounter();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increaseCounterByFive()}>Increament</button>
      </div>
    );
  }
}

export default Counter;
