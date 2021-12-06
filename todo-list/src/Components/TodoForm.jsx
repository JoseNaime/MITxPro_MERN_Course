import React, {useState} from 'react';

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmitForm = e => {
        e.preventDefault();
        if (value === '') return;
        addTodo(value);
        setValue('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmitForm}>
            <input type="text"
                   placeholder="Do ..."
                   value={value}
                   onChange={e => setValue(e.target.value)}/>
            <input disabled={value === ""} className={(value !== "") ? "active" : ""} type="submit" value="Add"/>
        </form>
    );
}

export default TodoForm;