
//We are packaging the data for the reducer. 

export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    task
  };
};
