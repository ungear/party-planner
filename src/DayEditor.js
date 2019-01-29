import React, { Component } from "react";
import Event from "./Event";

export default class DayEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [...props.events]
    };
    this.onEventUpdated = this.onEventUpdated.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onEventDeleted = this.onEventDeleted.bind(this);
  }

  onEventUpdated(updatedEvent) {
    let eventsList = [...this.state.events];
    let eventIndex = eventsList.findIndex(
      x => x.eventId === updatedEvent.eventId
    );
    eventsList[eventIndex] = updatedEvent;
    this.setState({ ...this.state, events: eventsList });
  }

  onSaveClick() {
    this.props.onEventsUpdated(this.state.events);
  }

  onEventDeleted(eventToDelete) {}
  render() {
    let dateString = new Date(this.props.dayTimestamp).toLocaleString("en-US", {
      month: "long",
      year: "numeric",
      day: "numeric"
    });
    let eventsData = this.props.events.filter(
      e => e.time === this.props.dayTimestamp
    );
    let eventsMarkup = eventsData.map(e => (
      <Event
        key={e.eventId}
        event={e}
        onEventUpdated={this.onEventUpdated}
        onEventDeleted={this.onEventDeleted}
      />
    ));
    return (
      <section>
        <h5>{dateString}</h5>
        <ul>{eventsMarkup}</ul>
        <button type="button" onClick={this.onSaveClick}>
          Save
        </button>
      </section>
    );
  }
}
