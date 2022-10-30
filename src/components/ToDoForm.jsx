import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const ToDoForm = ({create}) => {
    const [item, setItem] = useState({id: 0 ,title: '', isCompleted: false});

    const addNewTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            ...item,
            id: Date.now()
        }
        create(newTodo);
        setItem( {title: '', ...item} )
    }

    return (
        <form className="formTodo">
            <Input
                type="text"
                placeholder="What needs to be done?"
                value={item.title}
                onChange={event => setItem({...item, title: event.target.value})}
            />
            <Button onClick={addNewTodo}>Add</Button>
        </form>
    );
};

export default ToDoForm;