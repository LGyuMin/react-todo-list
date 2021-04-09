import React, { Component } from "react";
import './css/TodoHeader.css';

class TodoHeader extends Component {
    render() {
        return (
            <header id="header">
                <h1>Todo-List</h1>
                <input type="text"/>
            </header>
        );
    };
}

export default TodoHeader;