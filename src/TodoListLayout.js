import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoBody from './TodoBody';

class TodoListLayout extends Component {
    render() {
        return (
            <div>
                <TodoHeader />
                <TodoBody />
            </div>
        );
    }
}

export default TodoListLayout;