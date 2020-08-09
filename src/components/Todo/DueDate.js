import React from "react";

export default function TodoDueDate({ dueDate }) {
  if (!dueDate) return null;
  let textClass = "is-size-7 has-text-";

  const datePlus5Days = new Date();
  datePlus5Days.setDate(datePlus5Days.getDate() + 5);

  if (dueDate > datePlus5Days) textClass += "success";
  if (dueDate < datePlus5Days && dueDate > new Date()) textClass += "warning";
  if (dueDate < new Date()) textClass += "danger";

  const formattedDate = `${dueDate.getDate()}/${dueDate.getMonth() +
    1}/${dueDate.getFullYear()}`;
  return <span className={textClass}>{formattedDate}</span>;
}
