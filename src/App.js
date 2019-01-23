import React, { Component } from 'react';
import './App.css';
import Header from "./Header.js";
import DateSelection from "./DateSelection";
import Calendar from "./Calendar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: {
        year: 2019,
        month: 0
      }
    }
    this.onDateChanged = this.onDateChanged.bind(this)
  }
  onDateChanged(newDate) {
    this.setState({ ...this.state, currentDate: newDate })
  }
  render() {
    return (
      <main>
        <Header></Header>
        <DateSelection
          date={this.state.currentDate}
          onDateChanged={this.onDateChanged}
        />
        <Calendar date={this.state.currentDate}></Calendar>

        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */}
      </main>
    );
  }
}

export default App;
