import React from "react";
import moment from 'moment';

export default function DueDate({dueDate}) {
  return (
    <span className="due-date-container">
      <span className="test">{moment(dueDate).format("DD/MM/YYYY")}</span>
    </span>
  )
}
