import React from 'react';
import './TodoHeader.scss'

const TodoTemplate = ({ onSetFilterOption }) => {
    const setKeyword = (e) => {
        const keyword = e.target.value;

        if(e.key === 'Enter') {
            console.log(keyword);
            onSetFilterOption({keyword: keyword});
        }
    }

    return (
        <header className="TodoHeader">
            <h1>Todo-List</h1>
            <input type="text" placeholder="입력 후 엔터" onKeyUp={setKeyword}/>
        </header>
    );
};

export default TodoTemplate;