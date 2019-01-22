import React from 'react';

export default function Calendar(props) {
  return (
    <section>
      <h5>Calendar</h5>
      <div>{props.date.year} - {props.date.month}</div>
    </section>
  )
}