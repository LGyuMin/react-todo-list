import React, { Component } from "react";
import './css/TodoHeader.css';

class TodoHeader extends Component {
    render() {
        return (
            <header id="header">
                <h1>Todo-List</h1>
                <input type="text" placeholder="입력 후 엔터"/>
            </header>
        );
    };
}

export default TodoHeader;