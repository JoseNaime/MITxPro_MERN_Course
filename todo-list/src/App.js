import './App.css';
import TodoList from "./Components/TodoList";

function App() {
    return (
        <div className="app">
            <div className="todo-list">
                <h1>TODO List</h1>
                <TodoList />
            </div>
        </div>
    );
}

export default App;
