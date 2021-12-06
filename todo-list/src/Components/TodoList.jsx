import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoList() {
    const [todos, setTodos] = useState([
        {
            text: "Clean Room",
            isCompleted: false,
        },
        {
            text: "Do Math Homework",
            isCompleted: false,
        },
        {
            text: "Finish MIT XPro week section",
            isCompleted: false,
        }

    ])

    const handleIsCompletedToggle = (e,id) => {
        const checkboxValue = e.target.checked;
        const newTodos = [...todos];
        newTodos[id].isCompleted = checkboxValue;
        setTodos([...newTodos]);
    }
    const addTodo = text => {
        const newTodos = ([{text: text, isCompleted: false}, ...todos]);
        setTodos(newTodos);
    }

    const handleDeleteButtonClick = (e,id) => {
        e.preventDefault();
        const newTodos = [...todos];
        newTodos.splice(id,1)
        setTodos(newTodos);
    }

    return (
        <>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, i) => {
                return <TodoItem
                    id={i}
                    text={todo.text}
                    onCompleted={handleIsCompletedToggle}
                    onDelete={handleDeleteButtonClick}/>
            })}
        </>
    );
}

export default TodoList;