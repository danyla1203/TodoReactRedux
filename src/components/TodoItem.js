import React, { useState } from 'react';

function TodoItem(props) {
    const [ mode, setMode ] = useState("Read");
    const inputName = React.createRef();

    const chandeMode = () => {
        if (mode == "Read") {
            setMode("Edit");
        } else {
            setMode("Read");
        }
    }

    const saveTask = () => {
        props.saveTask(props.id, inputName.current.value);
        chandeMode();
    }

    if (mode == "Read") {
        return (
            <div className="todo" onClick={ chandeMode }>
                <h4>{ props.name }</h4>
                <button onClick={ () => props.deleteTask(props.id) }>Delete</button>
            </div>
        )   
    } else {
        return (
            <div className="todo">
                <form>
                    <input ref={ inputName } defaultValue={ props.name }></input>
                    <button onClick={ saveTask } type="button">Save!</button>
                </form>
            </div>
        )
    }
}

export default TodoItem;