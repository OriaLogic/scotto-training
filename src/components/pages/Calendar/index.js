import React from "react";
import moment from 'moment';

import Topbar from "./Topbar";

export default function Calendar () {
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
      <Topbar />
      <div className="view month-days">
        <div className="weekdays">
          <div className="day">Monday</div>
          <div className="day">Tuesday</div>
          <div className="day">Wednesday</div>
          <div className="day">Thursday</div>
          <div className="day">Friday</div>
          <div className="day">Saturday</div>
          <div className="day">Sunday</div>
        </div>
        {weeks.map((week, weekIndex) => {
          return (
            <div className="week" key={weekIndex}>
              {week.map((day, dayIndex) => {
                return (
                  <div className="day" key={dayIndex}>{day.format("DD")}</div>
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
