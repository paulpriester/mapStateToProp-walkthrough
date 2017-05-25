
//We are packaging the data for the reducer.

export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    task
  };
};

export const deleteTask = (id) => {
  return {
    type: 'DELETE_TODO',
    id: id
  };
};

export const updateTask = (task, id) => {
  return {
    type: 'UPDATE_TODO',
    task: task,
    id: id
  };
};
