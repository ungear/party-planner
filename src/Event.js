import React, { Component } from 'react';

export default class Event extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventId: props.event.eventId,
      time: props.event.time,
      description: props.event.description
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    }, _ => this.props.onEventUpdated(this.state));
  }

  render() {
    return (
      <div>
        <input value={this.state.description} name="description" onChange={this.handleInputChange} ></input>
      </div>
    )
  }
}