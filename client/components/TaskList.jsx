import React from 'react'
import Task from './Task'

export default function TaskList (props) {
  return (
    <div>
      {props.taskList.map(task =>
        (<Task id={task.id} task={task.task} key={task.id} />)
      )}
    </div>
  )
}
