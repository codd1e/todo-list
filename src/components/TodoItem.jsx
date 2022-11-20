import React from 'react';
import Check from "./UI/check/Check";
import Button from "./UI/button/Button";

const TodoItem = ({item, change, remove}) => {

    return (
        <div className='item'>
            <button className="item__title" onClick={() => change(item.id)}>
                <div style={{display: 'flex'}}>
                    <Check isComplited={item.isCompleted}/>
                    <span className={item.isCompleted === true ? 'completed' : 'default'}>
                {item.title}
            </span>
                </div>
            </button>
            <Button onClick={() => remove(item)}>Удалить</Button>
        </div>
    );
};

export default TodoItem;