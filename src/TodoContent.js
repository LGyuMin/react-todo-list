import React, { Component } from 'react';
import TodoAddInput from './TodoAddInput';
import TodoFilteredList from './TodoFilteredList'
import './css/TodoContent.css'

class TodoContent extends Component {
    render() {
        return(
            <div id="todoContent">
                <h2>My Todo-list</h2>
                <TodoAddInput />
                <TodoFilteredList />
            </div>
        );
    }
}

export default TodoContent;