import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

// extract the functions that we are going to use for dispatch.
import { deleteTask, updateTask } from "../actions/TaskAction";

class Task extends Component{
  constructor(){
    super();
    this.state ={
      edit: '',
      update: false

    }
  }

handleClick(event){
  event.preventDefault();
  // replace our original dispatch method with deleteTask.  It is made
  // available to us as a prop do to the bindActionCreators in our
  // mapDispatchToProps function.
  this.props.deleteTask( this.props.task.id)
}

handleEditClick(event){
  this.setState({
    update: true
  })
}

handleChange(event){
  this.setState({
    edit: event.target.value
  })
}

handleSubmit(event){
   event.preventDefault();
   // replace our original dispatch method with deleteTask.  It is made
   // available to us as a prop do to the bindActionCreators in our
   // mapDispatchToProps function.
   this.props.updateTask(this.state.edit, this.props.task.id)

   this.setState({
     update: false
   })
}


  render(){
    return (
      !this.state.update ?
      <div>
        <li>{this.props.task.task}</li>
        <button onClick={ (event)=> this.handleClick(event) }>Delete</button>
        <button onClick={ (event)=> this.handleEditClick(event) }>Update</button>
      </div>
      :
      <div>
        <input placeholder={this.props.task.task} onChange={(event) =>this.handleChange(event)}/>
        <button onClick={ (event)=> this.handleSubmit(event) }> Submit Edit </button>
      </div>
    )
  }
}


// 2 arguments are added below to accomodate for the two functions we are binding to props
// in this component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteTask,
    updateTask
  }, dispatch);
}

export default connect(undefined, mapDispatchToProps )(Task)
