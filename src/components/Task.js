import React, { Component } from "react";
import { connect } from "react-redux";

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

  this.props.dispatch({
    type: "DELETE_TODO",
    task: this.props.task.task,
    id: this.props.task.id
  })
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

   this.props.dispatch({
     type: "UPDATE_TODO",
     id: this.props.task.id

   })
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
export default connect(undefined)(Task)
