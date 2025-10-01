import { Component } from "react";
import "./Counter.css"; // import CSS

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });

  render() {
    return (
      <div className="counter-container">
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <div>
          <button onClick={this.increment}>➕ Increment</button>
          <button onClick={this.decrement}>➖ Decrement</button>
          <button onClick={this.reset}>🔄 Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
