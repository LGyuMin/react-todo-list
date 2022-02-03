import React, { useCallback } from 'react';
import './App.css';
import TodoHeader from './TodoHeader/TodoHeader';
import TodoFilter from './TodoFilter/TodoFilter';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import { useRecoilState } from 'recoil';
import { todoFilter } from './recoil/todo';

const App = () => {
  const [filter, setFilter] = useRecoilState(todoFilter);

  const onSetFilter = useCallback((newFilter) => {
    setFilter({...filter, ...newFilter});
  }, [filter, setFilter])
  
  return (
    <div className="App">
        <TodoHeader
          onSetFilter={onSetFilter}
        />
        <div className="TodoBody">
          <TodoFilter 
            filter={filter}
            onSetFilter={onSetFilter}
          />
          <div className="TodoContentBox">
            <h2>Todo-List</h2>
            <TodoInput />
            <TodoList />
          </div>
        </div>
    </div>
  );
}

export default App;
