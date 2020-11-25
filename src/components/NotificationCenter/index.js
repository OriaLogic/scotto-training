import React from "react";
import { values } from "lodash";
import { connect } from "react-redux";
import Notification from "./Notification";
import TodoList from "../TodoList";
import moment from 'moment';
import posed, { PoseGroup } from 'react-pose';

const AnimatedNotification = posed.ul({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export function NotificationCenter ({notifications, dismissNotification, deactivateNotification, snoozeTodo}) {
  return (
    <div className="notification-center">
      <PoseGroup>
          {notifications.map(notification => {
            return (
              <AnimatedNotification key={notification.id}>
                <Notification
                  notification={notification}
                  onDismiss={() => dismissNotification(notification.id)}
                  onDeactivate={() => deactivateNotification(notification.id, notification.todo.id, notification.todoListId)}
                  onSnooze={snoozeTodo}
                />
              </AnimatedNotification>
            )
          })}
      </PoseGroup>
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
        type: 'UPDATE_TODO',
        payload: {
          todoId,
          todoListId,
          updatedKeysInTodo: { active: false }
        }
      });

      dispatch({
        type: 'DISMISS_NOTIFICATION',
        payload: {
          id
        }
      })
    },

    snoozeTodo: (id, todoListId, todo, numberOfDays) => {
      const newTodoDate = moment(todo.dueDate).add(numberOfDays, 'days').toDate()
      dispatch({
        type: 'UPDATE_TODO',
        payload: {
          todoListId,
          todoId: todo.id,
          updatedKeysInTodo: { dueDate: newTodoDate }
        }
      });

      dispatch({
        type: 'DISMISS_NOTIFICATION',
        payload: {
          id
        }
      })

    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCenter);
