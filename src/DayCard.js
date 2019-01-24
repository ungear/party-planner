import React from 'react';
import "./DayCard.css";

export default function DayCard(props) {
  return (
    <div className="day-card">
      <div>{props.dayInfo.dayNumber}</div>
      <div>{props.dayInfo.events.length}</div>
    </div>
  )
}