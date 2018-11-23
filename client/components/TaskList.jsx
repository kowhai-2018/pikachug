import React from 'react'
import Task from './Task'

export default function TaskList (props) {
  return (
    <div className="row">
      {props.taskList.map(task =>
        (<Task id={task.id} task={task.task} key={task.id} removeTask={props.removeTask} confirmTask={props.confirmTask} checked={props.checked} />)
      )}
    </div>
  )
}
