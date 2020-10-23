import React from "react";
import { values } from "lodash";
import { connect } from "react-redux";

export function NotificationCenter ({notifications}) {
  return (
    <div className="notification-center">BONSOIR
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    notifications: values(state.notifications).filter((notification) => notification.active)
  }
}

export default connect(mapStateToProps)(NotificationCenter);
