import React, { useState } from "react";
import moment from 'moment';

import Topbar from "./Topbar";
import Day from "./Day";

export default function Calendar () {
  const [displayedMonth, setDisplayedMonth] = useState(moment().format('MMMM'));
  console.log(displayedMonth)

  const firstMonday = moment().startOf('month').startOf('isoWeek');
  console.log(firstMonday)

  const firstSunday = moment().endOf('month').endOf('isoWeek');
  console.log(firstSunday)

  const weeksDataStructure = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]

  const weeks = weeksDataStructure.map((week, weekIndex) => {
    return week.map((day, dayIndex) => {
      return firstMonday.clone().add(weekIndex*7 + dayIndex, 'days')
    })
  })

  console.log(weeks)

  return(
    <div className="calendar">
      <Topbar
        displayedMonth={displayedMonth}
        setDisplayedMonth={setDisplayedMonth}
      />
      <div className="view month-days">
        <div className="weekdays">
          <div className="day">MON</div>
          <div className="day">TUE</div>
          <div className="day">WED</div>
          <div className="day">THU</div>
          <div className="day">FRI</div>
          <div className="day">SAT</div>
          <div className="day">SUN</div>
        </div>
        {weeks.map((week, weekIndex) => {
          return (
            <div className="week" key={weekIndex}>
              {week.map((day, dayIndex) => {
                return (
                  <Day
                    day={day}
                    key={dayIndex}
                  />
                )
              })}
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}
