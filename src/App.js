import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Options from './components/options';
import Throws from './components/throws';
import Winner from './components/winner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      compSelect: null
    }
    this.selectThrow = this.selectThrow.bind(this);
    this.compThrow = this.compThrow.bind(this);
  }

  compThrow() {
    let comp = Math.floor(Math.random() * 3);
    if(comp === 0) {
      this.setState({
        compSelect: "rock"
      })
    } else if (comp === 1) {
        this.setState({
          compSelect: "paper"
        })
    } else {
      this.setState({
        compSelect: "scissors"
      })
    }
  }

  selectThrow(option, callback) {
    this.setState({
      userSelect: option
    })
  }

  render() {

    let user = this.state.userSelect;
    let comp = this.state.compSelect;

    let winnerIs = !user && !comp ? null : user === comp ? "TIE!" : user === "rock" && comp === "scissors" ? "USER WINS" : user === "paper" && comp === "rock" ? "USER WINS" : user === "scissors" && comp === "paper" ? "USER WINS" : "COMP WINS!";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Options selection={this.selectThrow} compThrow={this.compThrow}/>
        <Throws userThrow={this.state.userSelect} compThrow={this.state.compSelect}/>
        <Winner result={winnerIs} />
      </div>
    );
  }
}

export default App;
