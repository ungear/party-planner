import React, { Component } from 'react';
import './App.css';
import Header from "./Header.js";
import DateSelection from "./DateSelection";
import Calendar from "./Calendar";
import DayEditor from "./DayEditor";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentMonth: {
        year: 2019,
        month: 0
      },
      selectedDay: null,
      events: [
        {
          time: 1546290000000,
          description: "test event 1"
        },
        {
          time: 1546376400000,
          description: "test event 2"
        }
      ]
    }
  }
  onMonthChanged(newDate) {
    this.setState({ ...this.state, currentMonth: newDate, selectedDay: null })
  }
  onDaySelected(dayTimestamp) {
    this.setState({ ...this.state, selectedDay: dayTimestamp })
  }
  render() {
    let editor = this.state.selectedDay
      ? <DayEditor
        dayTimestamp={this.state.selectedDay}
        events={this.state.events} />
      : null
    return (
      <main>
        <Header></Header>
        <DateSelection
          date={this.state.currentMonth}
          onMonthChanged={this.onMonthChanged.bind(this)}
        />
        <Calendar
          date={this.state.currentMonth}
          events={this.state.events}
          onDaySelected={this.onDaySelected.bind(this)}
        ></Calendar>
        {editor}

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
