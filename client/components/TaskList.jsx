import React from 'react'
import Task from './Task'

export default function TaskList (props) {
  // removeTask(index, event) {
  //   const tasks = this.state.tasks
  //   tasks.splice(index, 1)
  //   this.setState({tasks})
  // }

  return (
    <div>
      {props.taskList.map(task =>
        (<Task id={task.id} task={task.task} key={task.id} removeTask={props.removeTask} />)
      )}
    </div>
  )
}
