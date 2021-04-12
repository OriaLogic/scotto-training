import React from "react";

export default function Day({ day }) {
  return <div className="day">{day.date()}</div>;
}
