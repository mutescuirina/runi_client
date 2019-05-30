import React from 'react'
import Form from './Form.js'

function SideBar(props) {
    return (
      <aside>
        <h1>SideBar</h1>
        <Form handleSubmit={props.handleSubmit}/>
      </aside>
    )
}

export default SideBar