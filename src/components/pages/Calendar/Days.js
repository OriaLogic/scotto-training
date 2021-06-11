import React from "react";
import moment from 'moment';

export default function Days ({day}) {
  return (
    <div className="day">
      {day.date()}
    </div>
  )
}
