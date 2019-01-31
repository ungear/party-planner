import React, { Component } from "react";
import DayCard from "./DayCard";
import "./Calendar.css";
import { Event, CurrentMonth, CalendarItem } from "../typing/entities";

const Weekdays: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

interface Props {
  date: CurrentMonth;
  events: Event[];
  onDaySelected: Function;
}

interface CalendarItemStub {
  dayNumber: number;
  timestamp: number;
  weekDay: number;
}

export default class Calendar extends Component {
  props: Props = {} as Props;
  render() {
    let calendar: CalendarItem[] = getCalendar(
      this.props.date.year,
      this.props.date.month
    ).map(d => ({
      ...d,
      events: this.props.events.filter(e => e.time === d.timestamp)
    }));

    let daysMarkup = calendar.map(d => (
      <div
        className="c-cell c-cell--card"
        key={d.dayNumber}
        style={{ gridColumn: d.weekDay + 1 }}
      >
        <DayCard dayInfo={d} onDaySelected={this.props.onDaySelected} />
      </div>
    ));
    let header = Weekdays.map((v, i) => (
      <div className="c-cell c-cell--header" key={i}>
        {v}
      </div>
    ));
    return (
      <section className="calendar">
        {header}
        {daysMarkup}
      </section>
    );
  }
}

function getCalendar(year: number, month: number): CalendarItemStub[] {
  let daysNumber = new Date(year, month + 1, 0).getDate();
  let calendar = Array(daysNumber)
    .fill(null)
    .map((v, i) => ({
      dayNumber: i + 1,
      timestamp: new Date(year, month, i + 1).getTime(),
      weekDay: new Date(year, month, i + 1).getDay()
    }));
  return calendar;
}
