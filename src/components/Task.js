import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteTask,
    updateTask
  }, dispatch);
}

export default connect(undefined, mapDispatchToProps )(Task)
