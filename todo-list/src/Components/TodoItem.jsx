import React from 'react';

function TodoItem({id, text, onCompleted, onDelete}) {
    return (
        <div className="todo-item-container">
            <div className="todo-item">
                <input type="checkbox" name={`todo-id-${id}`} onClick={e => onCompleted(e, id)} />
                <p>{text}</p>
            </div>
            <button className="delete-btn" onClick={e => onDelete(e, id)}>X</button>
        </div>
    );
}

export default TodoItem;