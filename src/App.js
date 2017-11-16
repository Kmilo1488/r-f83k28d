import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props){
    super(props);
    this.incrementa = this.incrementa.bind(this)
    this.state = {
      counter: 0
    }
  }

  incrementa(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.counter}</span>
        <button id="inc" onClick={this.incrementa}>Incrementa</button>
      </div>
    );
  }
}

export default App;
