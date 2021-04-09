import React, { Component } from 'react';
import TodoSideMenu from './TodoSideMenu';
import TodoContent from './TodoContent';
import './css/TodoBody.css'

class TodoBody extends Component {
    render() {
        return (
            <div id="todoBody">
                <TodoSideMenu />
                <TodoContent />
            </div>
        );
    } 
}

export default TodoBody;