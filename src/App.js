import React, { Component } from 'react';
import DisplayPanel from './components/DisplayPanel'; //Top Display Panel.
import ButtonPanel from './components/ButtonPanel';  //Button Panel that contains all the buttons. 
import calculate from './calculate';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null, //Total Result Value
      nextOperand: null,//Next Operand after an operator
      operator: null, //Operation to perform
    };
  }
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };
  render() {
    return (
      <div className="calculator">
        <DisplayPanel value={this.state.nextOperand || this.state.result || "0"}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
