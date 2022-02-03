import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import './TodoItem.scss'

const TodoItem = ({ todo, onChangeTodo, onRemoveTodo }) => {
    const [ isEditing, setIsEditing ] = useState(false);

    const onEditClick = useCallback(() => {
        setIsEditing(!isEditing);
    }, [isEditing]);

    const onInputEnter = (e) => {
        if(e.key === 'Enter') onEditClick();
    }

    const onEditChange = (e) => {
        onChangeTodo(todo.id, 'text', e.target.value)
    }
    return (
        <li className="TodoItem">
            <label className={ cn({selected: todo.isDone})} htmlFor={`input${todo.id}`}>
                <i className={ cn( todo.isDone ? ['fas', 'fa-check-circle'] : ['far', 'fa-circle'] ) }></i>
            </label>
            <input 
                type="checkbox" 
                id={`input${todo.id}`} 
                name={`input${todo.id}`}
                onChange={() => onChangeTodo(todo.id, 'isDone', !todo.isDone)}
            />

            {
                isEditing ? 
                    <input type="text" className="edit-input" value={todo.text} onChange={onEditChange} onKeyUp={onInputEnter}/> 
                    : <p className={ cn({selected: todo.isDone})} onClick={() => onChangeTodo(todo.id, 'isDone', !todo.isDone)}>{ todo.text }</p>
            }

            <div className="iconBox">
                <i 
                    className={ cn('fas', 'fa-edit', { selected: isEditing }) } 
                    onClick={onEditClick}
                ></i>
                <i 
                    className="fas fa-trash-alt"
                    onClick={()=> {onRemoveTodo(todo.id)}}
                ></i>
                <i 
                    className={ cn( todo.isImportant ? ['fas', 'fa-star', 'selected'] : ['far', 'fa-star']) }
                    onClick={()=> {onChangeTodo(todo.id, 'isImportant', !todo.isImportant)}}
                ></i>
            </div>
        </li>
    );
};

export default React.memo(TodoItem);