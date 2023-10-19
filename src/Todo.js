import React from 'react'

function Todo(props) {

    const handleCheck = () => {
        props.toggleTodo(props.id)
    }
  return (
    
    <div>
        <label>
            <input type="checkbox" checked={props.completed}  onChange={handleCheck} />
            {props.name}
        </label>
    </div>
  )
}

export default Todo