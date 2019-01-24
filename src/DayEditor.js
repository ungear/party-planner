import React, { Component } from 'react';

export default class DayEditor extends Component {
  render() {
    let dateString = new Date(this.props.dayTimestamp).toLocaleString("en-US", { month: 'long', year: 'numeric', day: "numeric" })
    let eventsData = this.props.events.filter(e => e.time === this.props.dayTimestamp);
    let eventsMarkup = eventsData.map(e => <li key={e.description}>{e.description}</li>)
    return (
      <section>
        <h5>{dateString}</h5>
        <ul>{eventsMarkup}</ul>
      </section>
    )
  }
}