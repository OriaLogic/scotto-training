import React from "react";
import { values } from "lodash";
import { connect } from "react-redux";
import Notification from "./Notification";
import TodoList from "../TodoList";
import moment from 'moment';

export function NotificationCenter ({notifications, dismissNotification, deactivateNotification, snoozeTodo}) {
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
                onSnooze={snoozeTodo}
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
    },

    snoozeTodo: (id, todoListId, todo, numberOfDays) => {
      dispatch({
        type: 'DISMISS_NOTIFICATION',
        payload: {
          id
        }
      });

      const newTodoDate = moment(todo.dueDate).add(numberOfDays, 'days').toDate()
      dispatch({
        type: 'UPDATE_TODO',
        payload: {
          todoListId,
          todoId: todo.id,
          updatedKeysInTodo: { dueDate: newTodoDate }
        }
      })

    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCenter);
