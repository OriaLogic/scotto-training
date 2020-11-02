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
                onDeactivate={() => deactivateNotification(notification.id, notification.todo.id, notification.todoListId)}
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

    deactivateNotification: (id, todoId, todoListId) => {
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
          todoListId,
          updatedKeysInTodo: { active: false }
        }
      })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCenter);
