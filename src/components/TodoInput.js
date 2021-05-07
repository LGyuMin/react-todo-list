import React, { useState, useCallback } from 'react';
import './TodoInput.scss'

const TodoInput = ({onAddTodo}) => {
    const [ value, setvalue ] = useState('');

    const onValueChange = (e) => {
        setvalue(e.target.value);
    }

    const onEnter = useCallback((e) => {
        if(e.key === 'Enter') {
            onAddTodo(value);
            setvalue('');
        }
    }, [onAddTodo, value])


    return (
        <div className="TodoInput">
            <label htmlFor="todo-input">
                <i className="fas fa-plus"></i>
            </label>
            <input 
                type="text" 
                namd="todo-input" 
                id="todo-input"
                value={value}
                placeholder="입력 후 엔터를 눌러 추가"
                onChange={onValueChange}
                onKeyUp={onEnter}
            />
        </div>
    );
};

export default TodoInput;