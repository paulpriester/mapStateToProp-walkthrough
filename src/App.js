import React, { Component } from 'react';
import UserInput from "./components/UserInput";

import Tasks from './components/Tasks';


class App extends Component {
  render() {
    return (
      <div>
      {/*Take away the store props below */}
        <UserInput />

        <Tasks />
      </div>
    );
  }
}

export default App;
