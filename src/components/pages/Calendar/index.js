import React from "react";
import moment from 'moment';

import Topbar from "./Topbar";
import Days from "./Days";

export default function Calendar () {
  const firstMonday = moment().startOf('month').startOf('isoWeek');
  console.log(firstMonday)

  const firstSunday = moment().endOf('month').endOf('isoWeek');
  console.log(firstSunday)

  const dataStructure = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]

  console.log(dataStructure)

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
        {dataStructure.map((weeks) => {
          return (
            <div className="week">
              {weeks.map((days) => {
                return (
                  <div className="day">{firstMonday.format("DD")}</div>
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
