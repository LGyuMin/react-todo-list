import React from 'react';
import './TodoSideMenu.scss'

const TodoSideMenu = () => {
    return (
        <div className="TodoSideMenu">
            <ul>
                <li>
                    <i className="fas fa-table"></i>모두 보기
                </li>
                <li>
                    <i className="fas fa-list-ul"></i>할 일
                </li>
                <li>
                    <i className="fas fa-check"></i>완료
                </li>
                <li>
                    <i className="far fa-star"></i>중요
                </li>
            </ul>
        </div>
    );
};

export default TodoSideMenu;