import React, { Component } from 'react';

export default class DateSelection extends Component {
  incrementDate() {
    let date = { ...this.props.date };
    date.month++;
    if (date.month === 13) {
      date.year++;
      date.month = 1;
    }
    this.props.onDateChanged(date)
  }

  decrementDate() {
    let date = { ...this.props.date };
    date.month--;
    if (date.month === 0) {
      date.year--;
      date.month = 12;
    }
    this.props.onDateChanged(date)
  }

  render() {
    return (
      <section>
        <button onClick={() => { this.decrementDate() }}>-</button>
        <span> {this.props.date.year} - {this.props.date.month}</span>
        <button onClick={() => { this.incrementDate() }}>+</button>
      </section>
    )
  }
}