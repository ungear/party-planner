import React, { Component } from 'react';
import DayCard from "./DayCard";
import "./Calendar.css";

const Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export default class Calendar extends Component {
  render() {
    let calendar = getCalendar(this.props.date.year, this.props.date.month);
    let daysMarkup = calendar.map(d =>
      <div
        className="c-cell c-cell--card"
        key={d.dayNumber}
        style={{ "gridColumn": d.weekDay + 1 }}
      >
        <DayCard dayInfo={d} />
      </div>
    )
    let header = Weekdays.map((v, i) =>
      <div className="c-cell c-cell--header" key={i}>{v}</div>
    )
    return (
      <section className="calendar">
        {header}
        {daysMarkup}
      </section>
    )
  }
}

function getCalendar(year, month) {
  let daysNumber = new Date(year, month + 1, 0).getDate();
  let calendar = Array(daysNumber)
    .fill(null)
    .map((v, i) => ({
      dayNumber: i + 1,
      weekDay: new Date(year, month, i + 1).getDay()
    }))
  return calendar
}