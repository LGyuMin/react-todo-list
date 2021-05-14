import React from 'react';
import './TodoSideMenu.scss'
import cn from 'classnames';

const TodoSideMenu = ({ onSetFilterOption, filterOption }) => {
    return (
        <div className="TodoSideMenu">
            <ul>
                <li className={cn({selected: filterOption.category === 'all'})} 
                    onClick={() => {onSetFilterOption({ category: 'all', value: true })}}
                >
                    <i className="fas fa-table"></i>모두 보기
                </li>
                <li className={cn({selected: filterOption.category === 'isDone' && !filterOption.value})} 
                    onClick={() => {onSetFilterOption({ category: 'isDone', value: false })}}
                >
                    <i className="fas fa-list-ul"></i>할 일
                </li>
                <li className={cn({selected: filterOption.category === 'isDone' && filterOption.value})} 
                    onClick={() => {onSetFilterOption({ category: 'isDone', value: true })}}
                >
                    <i className="fas fa-check"></i>완료
                </li>
                <li className={cn({selected: filterOption.category === 'isImportant'})} 
                    onClick={() => {onSetFilterOption({ category: 'isImportant', value: true })}}
                >
                    <i className="far fa-star"></i>중요
                </li>
            </ul>
        </div>
    );
};

export default TodoSideMenu;