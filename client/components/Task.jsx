import React, { Component } from 'react'
import { Input } from 'react-materialize'

export default class Task extends Component {
  state = {
    id: this.props.id,
    task: this.props.task,
    checked: this.props.checked
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
    this.props.confirmTask(this.state)
    this.setState({
      id: this.props.id,
      task: this.props.task,
      checked: this.props.checked
    })
  }

  render () {
    return (
      <div className="container center">
        <div className="col s8">
          <ul>
            <Input name='checked' checked={this.props.checked} type='checkbox' value='true' label={this.props.task} onClick={() => { this.changeHandler }} />
            <i className="material-icons" onClick={() => { this.props.removeTask(this.props.id) }}>delete</i>
          </ul>
        </div>
      </div>
    )
  }
}
