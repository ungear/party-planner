import React, { Component } from 'react';
import DayCard from "./DayCard";
import "./Calendar.css";

export default class Calendar extends Component {
  render() {
    let calendar = getCalendar(this.props.date.year, this.props.date.month);
    let daysMarkup = calendar.map(d => <DayCard key={d} day={{ test: d }} />)
    return (
      <section className="calendar">
        {daysMarkup}
      </section>
    )
  }
}

function getCalendar(year, month) {
  let daysNumber = new Date(year, month, 0).getDate();
  let calendar = Array(daysNumber)
    .fill(null)
    .map((v, i) => {
      return i + 1
    })
  return calendar
}