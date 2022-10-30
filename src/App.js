import './styles/App.css'
import TodoList from "./components/TodoList";
import React, {useState} from "react";
import Button from "./components/UI/button/Button";
import ToDoForm from "./components/ToDoForm";

function App() {
    const [items, setItems] = useState([]);
    const [isTodo, setIsTodo] = useState(true);
    const [count, setCount] = useState(0);

    const createTodo = (newTodo) => {
        setItems([...items, newTodo]);
        setCount(prev => prev + 1)
    }

    const changeTodo = (id) => {
        const copy = [...items];
        const currentItem = copy.find(item => item.id === id);
        currentItem.isCompleted = !currentItem.isCompleted;
        setItems(copy)
    }

    return (
        <div className="App">
            <h1 style={{textAlign: 'center'}}>todos</h1>
            <div className="toggler">
                <Button onClick={() => setIsTodo(!isTodo)}>Toggle Todos</Button>
            </div>
            <ToDoForm create={createTodo}/>
            <div style={{textAlign: 'center', margin: '5px 0'}}>
                Total todo: {count}
            </div>
            {isTodo && <TodoList items={items} change={changeTodo} />}
        </div>
    );
}

export default App;
