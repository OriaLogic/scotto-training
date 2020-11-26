export const getInitialState = () => {
  //return initialState as before
};

export const afterStoreInitialization = () => {
  setTimeout(() => triggerNotifications(store), 5000);
};

const triggerNotifications = store => {
  //code that dispatch ADD_NOTIFICATION actions
};
