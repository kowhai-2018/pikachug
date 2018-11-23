import React, { Component } from 'react'
import AddForm from './AddForm'
import { Modal, Button } from 'react-materialize'

export default class AddButton extends Component {
  render () {
    return (
      <div>
        <Modal
          header='Modal Header'
          trigger={<Button waves='light'>Add a Task</Button>}>
          <AddForm add={this.props.add} />
        </Modal>
      </div>
    )
  }
}
