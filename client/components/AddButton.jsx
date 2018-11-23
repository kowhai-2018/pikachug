import React, { Component } from 'react'
import AddForm from './AddForm'
import { Modal, Button } from 'react-materialize'

export default class AddButton extends Component {
  render () {
    return (
      <div>
        <img src='https://fontmeme.com/permalink/181123/a56f071d104e21766f658a56e158d3ea.png' />
        <Modal
          header='Modal Header'
          trigger={<a className='box' ></a>}>          
          <AddForm add={this.props.add} />
        </Modal>
      </div>
    )
  }
}

// floating large
