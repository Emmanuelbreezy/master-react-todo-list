import React from 'react';

import Todo from './Todo';

function TodoList(props) {
    const { todoList } = props;
  return (
    <>
     {todoList.map(todo=> (
        <Todo 
            key={todo.id}  
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            toggleTodo={props.toggleTodo}
            />
    ))}
    </>
  )
  
}

export default TodoList