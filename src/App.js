import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const LOCALSTORAGE_KEY = "todos.todo";

  useEffect(() => {
    if(todos.length > 0) {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
    }
  },[todos]);


  useEffect(() => {
      const result =  JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      setTodos(result);
  },[])


  const handleAddTodo = () => {
    if(!value) return null;

    setTodos((prevState) => ([
      ...prevState,
      {
        id: uuidv4(),
        name: value,
        completed: false
      }
    ]));

    setValue('');
  };

  const toggleTodo = (id) => {
    const newTodo = [...todos];
    const todo = newTodo.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodo)
  }

  const handleClearTodo = () => {
    const newTodo = todos.filter(todo => !todo.completed);
    setTodos(newTodo)
  }

  return (
    <>
      <TodoList todoList={todos} toggleTodo={toggleTodo} />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={handleAddTodo}>
        Add Todo
      </button>
      <button type="button" onClick={handleClearTodo}>Clear completed Todo</button>
      <div>{todos.filter(todo => !todo.completed).length} left to do</div>
    </>
  );
}

export default App;
