import React, { useState, useRef, useCallback, useMemo } from 'react';
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

  const [ filterOption, setFilterOption ] = useState({
      keyword: '', category: 'all', value: true
  });

  const nextId = useRef(4);

  const onAddTodo = useCallback((text) => {
    if(text.trim() === '') return;

    const newTodo = {
      id: nextId.current,
      text: text,
      isDone: false,
      isImportant: false
    }

    setTodos(todos => [...todos, newTodo]);
    nextId.current++;
  }, []);

  const onChangeTodo = useCallback((id, prop, value) => {
    setTodos(todos => 
      todos.map(todo => { // 불변성 때문에.... 이렇게 수정해야함..
          return todo.id === id ? {...todo, [prop]: value} : todo;
        }
      )
    );
  }, []);

  const onRemoveTodo = useCallback((id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, [])

  const onSetFilterOption = useCallback(newOption => {
    const newFilterOption = {...filterOption};

    for(const key in newFilterOption) {
      newFilterOption[key] = newOption[key] !== undefined ? newOption[key] : newFilterOption[key];
    }

    setFilterOption(newFilterOption);
  }, [filterOption])

  const filteredTodos = useMemo(() => {
    let filteredTodo = [...todos];

    // 좌측 메뉴 선택 시
    if(filterOption.category !== 'all') {
      filteredTodo = filteredTodo.filter(todo => {
        return todo[filterOption.category] === filterOption.value;
      })
    }

    // 검색 시
    if(filterOption.keyword) {
      filteredTodo = filteredTodo.filter(todo => {
        return todo.text.includes(filterOption.keyword);
      })
    }

    return filteredTodo;

    // 검색어로 검색
  }, [todos, filterOption])
  
  return (
    <div className="App">
        <TodoHeader
          onSetFilterOption={onSetFilterOption}
        />
        <div className="TodoBody">
          <TodoSideMenu 
            onSetFilterOption={onSetFilterOption}
            filterOption={filterOption}
          />
          <div className="TodoContentBox">
            <h2>Todo-List</h2>
            <TodoInput onAddTodo={onAddTodo}/>
            <TodoList 
              todos={filteredTodos}
              onChangeTodo={onChangeTodo}
              onRemoveTodo={onRemoveTodo}
            />
          </div>
        </div>
    </div>
  );
}

export default App;
