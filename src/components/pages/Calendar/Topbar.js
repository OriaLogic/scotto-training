import React from 'react';
import moment from 'moment';

import Button from "../../library/Button";

export default function Topbar ({ displayedMonth, setDisplayedMonth }) {
  return (
    <div className="header">
      <div className="calendar-nav left-actions">
      </div>
      <div className="calendar-nav center-actions">
        <Button
          type="submit"
          size="small"
          onClick={() => setDisplayedMonth(displayedMonth)}
        >
        <span className="icon">
          <i className="fas fa-angle-left"></i>
        </span>
        </Button>
        <Button
          type="submit"
          size="small"
          onClick={() => setDisplayedMonth(displayedMonth)}
        >
        <span className="icon">
          <i className="fas fa-angle-right"></i>
        </span>
        </Button>
        {displayedMonth}
      </div>
      <div className="calendar-nav right-actions">
      </div>
    </div>
  )
}
