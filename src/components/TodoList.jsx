import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({items, change}) => {
    if(items.length === 0) {
        return <h1 style={{textAlign: 'center'}}>ToDo list пуст</h1>
    }
    return (
        <div className="itemsList">
            {items.map((item, index) => (
                <TodoItem key={index + 1} item={item} change={change}/>
            ))}
        </div>
    );
};

export default TodoList;