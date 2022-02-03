import React, { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.scss';

import { todoList, filteredTodoList } from '../recoil/todo';

const TodoList = () => {
    const [todos, setTodos] = useRecoilState(todoList);
    const filteredTodos = useRecoilValue(filteredTodoList);

    const onChangeTodo = useCallback((id, type, value) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? {...todo, [type]: value} : todo;
        }))
    }, [todos, setTodos]);

    const onRemoveTodo = useCallback((id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id;
        }))
    }, [todos, setTodos])
    
    return (
        <div className="TodoList">
            <ul>
                {
                    filteredTodos.map(todo => (
                        <TodoItem 
                            todo={todo} 
                            key={todo.id}
                            onChangeTodo={onChangeTodo}
                            onRemoveTodo={onRemoveTodo}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default React.memo(TodoList);