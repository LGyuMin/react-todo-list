import React, { Component } from 'react';
import './css/TodoAddInput.css';

class TodoAddInput extends Component {
    render() {
        return (
            <div id="addInputBox">
                <label for="todo-input">
                    <i class="fas fa-plus"></i>
                </label>
                <input type="text" namd="addTodo" id="addTodo" placeholder="입력 후 엔터를 눌러 추가"/>
            </div>
        );
    }
}

export default TodoAddInput;