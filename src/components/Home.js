import React from 'react'
import { connect } from "react-redux";

import { action, deleteAction, updateAction } from '../actions/action';
import TodoItem from "./TodoItem";

function Home(props) {
    const inputName = React.createRef();

    const addTask = () => {
        let name = inputName.current.value;
        
        let lastTask = props.todos[props.todos.length - 1];
        let key = lastTask ? lastTask.id + 1: 0;

        props.dispatch(action("ADD_TASK", name, key));
    }
    const saveTask = (task_id, text) => {
        props.dispatch(updateAction("UPDATE_TASK", task_id, text));
    }
    const deleteTask = (id) => {
        console.log(id);
        props.dispatch(deleteAction("DELETE_TASK", id));
    }

    let todos = props.todos.map((element) => {
        return <TodoItem name={ element.name }
                         id={ element.id } 
                         deleteTask={ deleteTask }
                         saveTask={ saveTask }
                         key={ element.id }
                />
    });
    return (
        <div>
            { todos }
            <form>
                <input type="text" ref={ inputName }></input>
                <button type="button" onClick={ addTask }>Add Task</button>
            </form>
        </div>
    )
}

function state2Props(state) {
    return {
        todos: state
    }
}

export default connect(state2Props)(Home);