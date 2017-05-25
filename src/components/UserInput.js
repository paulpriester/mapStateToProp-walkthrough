import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTask } from '../actions/TaskAction';

// Using bindActionCreators allows us make a dispatch just from using an action.
// Similar to binding a variable to an object.
import { bindActionCreators } from 'redux';




export class UserInput extends Component {

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

    // We can take away dispatch and just use addTask here with the argument.
    this.props.addTask(this.state.task)
  }



  render() {

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

// Below we are taking in the component which is in our action file,
// and we are making it available to this component as a prop.
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTask,
  }, dispatch);
}



// our connect method takes in a function for mapping the state to props.
// the second argument for connect() is used for mapping Dispatch to props.
// This means that if there are any actions we would like to pass into this component,
// we can make that action available to this component as a prop
export default connect(undefined, mapDispatchToProps)(UserInput)
