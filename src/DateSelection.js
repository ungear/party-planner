import React, { Component } from 'react';
import "./DateSelection.css";

export default class DateSelection extends Component {
  incrementDate() {
    let date = { ...this.props.date };
    date.month++;
    if (date.month === 13) {
      date.year++;
      date.month = 1;
    }
    this.props.onMonthChanged(date)
  }

  decrementDate() {
    let date = { ...this.props.date };
    date.month--;
    if (date.month === 0) {
      date.year--;
      date.month = 12;
    }
    this.props.onMonthChanged(date)
  }

  render() {
    return (
      <section className="date-selection">
        <button onClick={() => { this.decrementDate() }}>-</button>
        <span> {new Date(this.props.date.year, this.props.date.month).toLocaleString("en-US", { month: 'long', year: 'numeric' })}</span>
        <button onClick={() => { this.incrementDate() }}>+</button>
      </section>
    )
  }
}