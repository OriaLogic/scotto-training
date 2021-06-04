import React from "react";
import moment from 'moment';

import Topbar from "./Topbar";

export default function Calendar () {
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
      </div>
    </div>
  )
}
