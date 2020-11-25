import React from "react";
import moment from 'moment';

export default function DueDate({dueDate}) {
  const now = moment();
  const momentDueDate = moment(dueDate);

  const diff = momentDueDate.diff(now, 'days');

  const dateIsOverdue = diff < 0;
  const dateIsSoon = diff >= 0 && diff <= 3;
  const dateIsInTheLateFuture = diff > 3;

  let className = "";
  if (dateIsOverdue) className = "has-text-danger"
  else if (dateIsSoon) className = "has-text-warning"
  else if (dateIsInTheLateFuture) className = "has-text-success"

  return (
    <span className="due-date-container">
      <span className={className}>{momentDueDate.format("DD/MM/YYYY")}</span>
    </span>
  )
}
