import React from 'react';
import './TodoHeader.scss'

const TodoTemplate = () => {
    return (
        <header className="TodoHeader">
            <h1>Todo-List</h1>
            <input type="text" placeholder="입력 후 엔터"/>
        </header>
    );
};

export default TodoTemplate;