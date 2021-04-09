import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoSideMenu from './TodoSideMenu';

class TodoListLayout extends Component {
    render() {
        return (
            <div>
                <TodoHeader />
                <TodoSideMenu />
            </div>
        );
    }
}

export default TodoListLayout;