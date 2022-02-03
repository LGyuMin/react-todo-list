import React, { useState, useCallback, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { todoList } from '../recoil/todo';
import './TodoInput.scss'

const TodoInput = () => {
    const [ value, setValue ] = useState('');
    const [todos, setTodos] = useRecoilState(todoList);

    const nextId = useRef(4);

    const onValueChange = useCallback((e) => {
        setValue(e.target.value);
    }, [])

    const onEnter = useCallback((e) => {
        if(e.key === 'Enter' && value.trim() !== '') {
            setTodos([...todos, {id: nextId.current, text: value, isDone: false, isImportant: false}]);
            setValue('');
            nextId.current++;
        }
    }, [todos, setTodos, value])


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