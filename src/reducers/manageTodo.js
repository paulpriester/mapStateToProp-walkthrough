export default function manageTasks(state = {
  tasks: ["Get Eggs"],
}, action){
  switch (action.type) {

    case 'ADD_TASK':
    console.log(state);
      return Object.assign({}, state, {
        tasks: state.tasks.concat(action.task)
      });

    default:
      return state;
  }
};
