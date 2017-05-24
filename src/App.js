import React, { Component } from 'react';
import UserInput from "./components/UserInput";

// We change the below from { AllTasks } to Tasks because we are
// exporting with default meaning there are no libraries that we are
// pulling from. Just the class Tasks.
import Tasks from './components/Tasks';


class App extends Component {
  render() {
    return (
      <div>
        <UserInput store={this.props.store} />
        {/*Change AllTasks to Tasks here*/}
        <Tasks />
      </div>
    );
  }
}

export default App;
