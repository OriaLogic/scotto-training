import React from "react";
import moment from 'moment';

export default function Day ({day}) {
  return (
    <div className="day">
      {day.format("DD")}
    </div>
  )
}
