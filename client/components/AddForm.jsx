import React, { Component } from 'react'

export default class AddForm extends Component {
  state = {
    id: '',
    task: ''
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault() 
    this.props.add(this.state)
    this.setState({
      id: '',
      task: ''
    })
  }
  render () {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="task" placeholder="new task" onChange={this.changeHandler} value={this.state.task}/>
          <input value="submit" type="submit"/>
        </form>
      </div>
    )
  }
}
