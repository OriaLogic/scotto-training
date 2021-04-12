import React, { useState, useEffect } from "react";
import moment from "moment";

import Topbar from "./Topbar";
import Day from "./Day";

const DISPLAYED_WEEK_COUNT = 5;
const DAYS_IN_WEEK = 7;

export default function Calendar() {
  const now = moment();
  const month = now.month();
  const [displayedMonth, setDisplayedMonth] = useState(month);
  const [startingMonday, setStartingMonday] = useState(null);

  useEffect(() => {
    const firstDayOfMonth = moment().month(displayedMonth).date(1);
    const firstWeekdayOfMonth = firstDayOfMonth.isoWeekday();
    const firstMondayBeforeMonth = firstDayOfMonth.days(firstDayOfMonth.date());
    setStartingMonday(firstMondayBeforeMonth);
  }, [displayedMonth, setStartingMonday]);

  if (!startingMonday) return null;

  const displayedDaysCount = DISPLAYED_WEEK_COUNT * DAYS_IN_WEEK; // Number of weeks displayed in the UI;

  const days = new Array(displayedDaysCount)
    .fill(0)
    .map((_, i) => startingMonday.clone().add(i, "days"));
  const weeks = new Array(DISPLAYED_WEEK_COUNT)
    .fill(0)
    .map((_, i) => days.slice(i * 7, i * 7 + 7));

  return (
    <div className="calendar">
      <Topbar month={displayedMonth} onChangeMonth={setDisplayedMonth} />

      <div className="view month-days">
        <div className="weekdays">
          <div className="day">LUN.</div>
          <div className="day">MAR.</div>
          <div className="day">MER.</div>
          <div className="day">JEU.</div>
          <div className="day">VEN.</div>
          <div className="day">SAM.</div>
          <div className="day">DIM.</div>
        </div>
        {weeks.map((week) => (
          <div className="week" key={week[0].week()}>
            {week.map((day) => (
              <Day day={day} key={day.date()} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
