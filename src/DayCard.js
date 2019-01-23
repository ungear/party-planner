import React from 'react';
import "./DayCard.css";

export default function DayCard(props) {
  return (
    <div className="day-card">{props.dayInfo.dayNumber}</div>
  )
}