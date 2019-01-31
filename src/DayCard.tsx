import React from "react";
import "./DayCard.css";

export default function DayCard(props: any) {
  return (
    <div
      className="day-card"
      onClick={() => {
        props.onDaySelected(props.dayInfo.timestamp);
      }}
    >
      <div>{props.dayInfo.dayNumber}</div>
      <div>{props.dayInfo.events.length}</div>
    </div>
  );
}
