import React from 'react';
import moment from 'moment';

export default function Topbar ({ }) {
  const month = moment().format('MMMM');

  return (
    <div className="header">
      {month}
    </div>
  )
}
