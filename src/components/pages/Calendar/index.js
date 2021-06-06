import React from "react";
import moment from 'moment';

import Topbar from "./Topbar";

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
        <div className="week">
          <div className="day">{firstMonday.format("DD")}</div>
          <div className="day">bb</div>
          <div className="day">cc</div>
          <div className="day">dd</div>
          <div className="day">ee</div>
          <div className="day">ff</div>
          <div className="day">gg</div>
        </div>
        <div className="week">
          <div className="day">aa</div>
          <div className="day">bb</div>
          <div className="day">cc</div>
          <div className="day">dd</div>
          <div className="day">ee</div>
          <div className="day">ff</div>
          <div className="day">gg</div>
        </div>
        <div className="week">
          <div className="day">aa</div>
          <div className="day">bb</div>
          <div className="day">cc</div>
          <div className="day">dd</div>
          <div className="day">ee</div>
          <div className="day">ff</div>
          <div className="day">gg</div>
        </div>
        <div className="week">
          <div className="day">aa</div>
          <div className="day">bb</div>
          <div className="day">cc</div>
          <div className="day">dd</div>
          <div className="day">ee</div>
          <div className="day">ff</div>
          <div className="day">gg</div>
        </div>
        <div className="week">
          <div className="day">aa</div>
          <div className="day">bb</div>
          <div className="day">cc</div>
          <div className="day">dd</div>
          <div className="day">ee</div>
          <div className="day">ff</div>
          <div className="day">{firstSunday.format("DD")}</div>
        </div>
      </div>
    </div>
  )
}
