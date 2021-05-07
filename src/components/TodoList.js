import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onChangeTodo, onRemoveTodo }) => {
    return (
        <div className="TodoList">
            <ul>
                {
                    todos.map(todo => (
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

export default TodoList;