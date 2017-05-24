
let counter=0;
export default function manageTasks(state = {
  tasks: [],
}, action){
  switch (action.type) {

    case 'ADD_TASK':
      console.log(state);
      counter++;
      let obj = {task: action.task, id: counter }
      return Object.assign({}, state, {
        tasks: state.tasks.concat(obj)
      });
    case "DELETE_TODO":
      const deletedObj = state.tasks.filter((task) => task.id !== action.id);
      return Object.assign({}, state, {
        tasks: deletedObj
      })
    case "UPDATE_TODO":
    return {
        ...state,
        tasks: state.tasks.map(todo => todo.id === action.id ?
            // transform the one with a matching id
            {  id: action.id, task: action.task } :
            // otherwise return original todo
            todo
        )
      }



    default:
      return state;
  }
};
