import React from "react";
import "./DayCard.css";
import { CalendarItem } from "../typing/entities";

interface Props {
  dayInfo: CalendarItem;
  onDaySelected: Function;
}

export default function DayCard(props: Props) {
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
