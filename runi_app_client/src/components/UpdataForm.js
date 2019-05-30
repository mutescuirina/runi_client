import React from 'react'
import Races from './Races.js'

function Main(props) {
  const { races, handleDelete, handleUpdate } = props
    return (
      <main>
        <Races
         races={races}
         handleDelete={handleDelete}
         handleUpdate={handleUpdate}
        />
      </main>
    )
}

export default Main