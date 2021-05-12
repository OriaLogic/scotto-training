import React from "react";

import Topbar from "./Topbar";

export default function Calendar () {
  return(
    <div className="calendar-container">
      <Topbar />
      <div className="days">
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
        <div>Sunday</div>
      </div>
      <div className="cells">
        <div>aa</div>
        <div>bb</div>
        <div>cc</div>
        <div>dd</div>
        <div>ee</div>
        <div>ff</div>
        <div>gg</div>
      </div>
    </div>
  )
}
