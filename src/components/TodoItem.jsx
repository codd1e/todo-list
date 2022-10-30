import React from 'react';
import Check from "./UI/check/Check";

const TodoItem = ({item, change}) => {

    return (
        <button className="item" onClick={() => change(item.id)}>
            <Check isComplited={item.isCompleted}/>
            <span className={item.isCompleted === true ? 'completed' : 'default'}>
                {item.title}
            </span>
        </button>
    );
};

export default TodoItem;