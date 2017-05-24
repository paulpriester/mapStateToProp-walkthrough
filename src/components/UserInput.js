import React, { Component } from "react";
// we are new requiring connect.  Essentially, it allows our component to have
// access to the state and have the ability to manipulate the information using
// an outside function.
import { connect } from 'react-redux';

// Taking away export from this class.
class UserInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      task: ''
    };
  }

  handleChange(event) {
    this.setState({
      task: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();

    // change this.props.store.dispact to this.props.dispatch because we now have access to
    // the createStore dispatch method.
    this.props.dispatch({

      type: "ADD_TASK",
      task: this.state.task
    })
  }

  render() {
    // Add the debugger here to find out the props that this component currently has.
    
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
      <p>
        <input
          type="text"
          onChange={(event) => this.handleChange(event)}
          placeholder="enter name"/>
      </p>

        <input type="submit" />
      </form>
    )
  }
}
// Using default allows us to not have to {} in the App.js when importing this component.
// We do not have a function such as mapStateToProps. The reason being... we are only dispatching
// data to our reducer. HOwever, connect() is still looking for a first function as an argument.
// in that case, we enter undefined plus the current component class.
// Now we have access to dispatch as a prop.
export default connect(undefined)(UserInput)
