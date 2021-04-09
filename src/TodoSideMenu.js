import React, { Component } from 'react';
import './css/TodoSideMenu.css'

class TodoSideMenu extends Component {
    render() {
        return (
            <div id="sideMenu">
                <ul>
                    <li>
                        <i class="fas fa-table"></i>모두 보기
                    </li>
                    <li>
                        <i class="fas fa-list-ul"></i>할 일
                    </li>
                    <li>
                        <i class="fas fa-check"></i>완료
                    </li>
                    <li>
                        <i class="far fa-star"></i>중요
                    </li>
                </ul>
            </div>
        );
    }
}

export default TodoSideMenu;