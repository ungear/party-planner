import React, { Component } from "react";
import Event from "./Event";

export default class DayEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [...props.events],
      dayTimestamp: props.dayTimestamp
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

  onEventDeleted(eventToDelete) {
    let eventsList = [...this.state.events].filter(
      ev => ev.eventId !== eventToDelete.eventId
    );
    this.setState({ ...this.state, events: eventsList });
  }

  static getDerivedStateFromProps(props, state) {
    let newCard = props.dayTimestamp !== state.dayTimestamp;
    if (newCard)
      return {
        events: [...props.events],
        dayTimestamp: props.dayTimestamp
      };
    return null;
  }

  render() {
    let dateString = new Date(this.props.dayTimestamp).toLocaleString("en-US", {
      month: "long",
      year: "numeric",
      day: "numeric"
    });
    let eventsData = this.state.events.filter(
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
