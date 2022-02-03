import React from 'react';
import './TodoFilter.scss'
import cn from 'classnames';

const TodoFilter = ({filter, onSetFilter}) => {
    
    return (
        <div className="TodoFilter">
            <ul>
                <li className={cn({selected: filter.category === 'all'})} 
                    onClick={() => {onSetFilter({ category: 'all', value: true })}}
                >
                    <i className="fas fa-table"></i>모두 보기
                </li>
                <li className={cn({selected: filter.category === 'isDone' && !filter.value})} 
                    onClick={() => {onSetFilter({ category: 'isDone', value: false })}}
                >
                    <i className="fas fa-list-ul"></i>할 일
                </li>
                <li className={cn({selected: filter.category === 'isDone' && filter.value})} 
                    onClick={() => {onSetFilter({ category: 'isDone', value: true })}}
                >
                    <i className="fas fa-check"></i>완료
                </li>
                <li className={cn({selected: filter.category === 'isImportant'})} 
                    onClick={() => {onSetFilter({ category: 'isImportant', value: true })}}
                >
                    <i className="far fa-star"></i>중요
                </li>
            </ul>
        </div>
    );
};

export default TodoFilter;