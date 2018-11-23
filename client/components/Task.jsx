import React from 'react'

export default function Task (props) {
  return (
    <div>
      <ul>{props.task} - <button onClick={() => { props.removeTask(props.id) }}>Delete</button>
      </ul>
    </div>
  )
}
