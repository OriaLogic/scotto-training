import React from "react";
import { values } from "lodash";
import { connect } from "react-redux";
import moment from "moment";
import posed, { PoseGroup } from "react-pose";

import Notification from "./Notification";

const AnimationWrapper = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

function NotificationCenter({
  notifications,
  dismissNotification,
  deactivateTodo,
  snoozeTodo
}) {
  return (
    <div className="notification-center">
      <PoseGroup>
        {notifications.map(notification => (
          <AnimationWrapper key={notification.id}>
            <Notification
              notification={notification}
              dismissNotification={dismissNotification}
              deactivateTodo={deactivateTodo}
              snoozeTodo={snoozeTodo}
            />
          </AnimationWrapper>
        ))}
      </PoseGroup>
    </div>
  );
}

const mapStateToProps = state => ({
  notifications: values(state.notifications).filter(
    notification => notification.active
  )
});

const mapDispatchToProps = dispatch => ({
  dismissNotification: id =>
    dispatch({
      type: "DISMISS_NOTIFICATION",
      payload: { id }
    }),
  deactivateTodo: (notificationId, todo) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        todoId: todo.id,
        todoListId: todo.todoListId,
        updatedKeysInTodo: { active: false }
      }
    });

    dispatch({
      type: "DISMISS_NOTIFICATION",
      payload: { id: notificationId }
    });
  },
  snoozeTodo: (notificationId, todo, quantity, timeType) => {
    const newDueDate = moment(todo.dueDate)
      .add(quantity, timeType)
      .toDate();

    dispatch({
      type: "UPDATE_TODO",
      payload: {
        todoId: todo.id,
        todoListId: todo.todoListId,
        updatedKeysInTodo: { dueDate: newDueDate }
      }
    });

    dispatch({
      type: "DISMISS_NOTIFICATION",
      payload: { id: notificationId }
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationCenter);
