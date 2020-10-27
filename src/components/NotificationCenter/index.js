import React from "react";
import { values } from "lodash";
import { connect } from "react-redux";
import Notification from "./Notification";


export function NotificationCenter ({notifications}) {
  return (
    <div className="notification-center">
      <ul>
        {notifications.map(notification => {
          return (
            <li key={notification.id}>
              <Notification
                notification={notification}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    notifications: values(state.notifications).filter((notification) => notification.active)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dismissNotification: (id) => {
      dispatch({
        type:'DISMISS_NOTIFICATION',
        payload: {
          id
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCenter);
