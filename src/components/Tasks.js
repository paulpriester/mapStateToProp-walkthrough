import React, { Component } from 'react';
import { connect } from 'react-redux';


class Tasks extends Component {
  render() {
    const tasks = this.props.tasks.map((task, index) => <li key={index}>{task}</li>)
    return (
      <div>
        <ul>
          {tasks}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
   return {
     tasks: state.tasks
   };
 };

// We're going to change the way that we export this file.
// export const AllTasks = connect(mapStateToProps)(Tasks);
// Now go back to App.js and change the import name AllTasks to Tasks

export default connect(mapStateToProps)(Tasks);
