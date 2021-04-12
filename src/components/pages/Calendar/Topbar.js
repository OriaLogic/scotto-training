import React from "react";
import moment from "moment";

import Button from "../../library/Button";

export default function Topbar({ month, onChangeMonth }) {
  const monthName = moment().month(month).format("MMMM");

  return (
    <div className="topbar">
      <div className="calendar-nav left-actions" />
      <div className="calendar-nav center-actions">
        <div />
        <div>
          <Button
            size="small"
            style={{ marginRight: 10 }}
            onClick={() => onChangeMonth(month - 1)}
          >
            <span className="icon">
              <i className="fas fa-chevron-left"></i>
            </span>
          </Button>
          <Button size="small" onClick={() => onChangeMonth(month + 1)}>
            <span className="icon">
              <i className="fas fa-chevron-right"></i>
            </span>
          </Button>
        </div>
        <div>{monthName}</div>
      </div>
      <div className="calendar-nav right-actions" />
    </div>
  );
}
