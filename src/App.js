import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoSideMenu from './components/TodoSideMenu';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [ todos, setTodos ] = useState([
    { id: 1, text: '집가기', isDone: false, isImportant: false },
    { id: 2, text: '영화 보기', isDone: false, isImportant: false },
    { id: 3, text: '아무것도 안하기', isDone: true, isImportant: true },
  ]);

  const nextId = useRef(4);

  const onAddTodo = useCallback((text) => {
    if(text.trim() === '') return;

    const newTodo = {
      id: nextId.current,
      text: text,
      isDone: false,
      isImportant: false
    }

    const nextTodos = [...todos, newTodo];
    setTodos(nextTodos);
    nextId.current++;
  }, [todos]);

  const onChangeTodo = useCallback((id, prop, value) => {
    setTodos(
      todos.map(
        todo => {
          todo[prop] = todo.id === id ? value : todo[prop]
          return todo;
        }
      )
    );
  }, [todos]);

  const onRemoveTodo = useCallback((id) => {
    setTodos(
      todos.filter(
        todo => todo.id !== id
      )
    )
  }, [todos])
  
  return (
    <div className="App">
        <TodoHeader/>
        <div className="TodoBody">
          <TodoSideMenu/>
          <div className="TodoContentBox">
            <h2>Todo-List</h2>
            <TodoInput onAddTodo={onAddTodo}/>
            <TodoList 
              todos={todos}
              onChangeTodo={onChangeTodo}
              onRemoveTodo={onRemoveTodo}
            />
          </div>
        </div>
    </div>
  );
}

export default App;
