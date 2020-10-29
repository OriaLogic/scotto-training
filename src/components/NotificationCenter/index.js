import React from "react";
import { values } from "lodash";
import { connect } from "react-redux";
import Notification from "./Notification";
import TodoList from "../TodoList";


export function NotificationCenter ({notifications, dismissNotification, deactivateNotification}) {
  return (
    <div className="notification-center">
      <ul>
        {notifications.map(notification => {
          return (
            <li key={notification.id}>
              <Notification
                notification={notification}
                onDismiss={() => dismissNotification(notification.id)}
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
    },

    deactivateNotification: (id, todoId, todoListId, updatedKeysInTodo) => {
      dispatch({
        type: 'DISMISS_NOTIFICATION',
        payload: {
          id
        }
      });

      dispatch({
        type: 'UPDATE_TODO',
        payload: {
          todoId,
          updatedKeysInTodo,
          todoListId: ownProps.id,
          active: false
        }
      })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCenter);
