function reducer(state = [], action) {
    let newState = [];
    switch (action.type) {
        case "ADD_TASK":
            newState = state.concat(action.task_obj);
            return newState;

        case "DELETE_TASK":
            newState = [];
            state.map((task) => {
                if (task.id == action.delete_id) {
                    return;
                } else {
                    newState.push(task);
                }
            });
            return newState;
        case "UPDATE_TASK":
            newState = [];
            state.map((task) => {
                if ( task.id == action.update_id ) {
                    newState.push({ id: task.id, name: action.text });
                } else {
                    newState.push(task);
                }
            });
            return newState;
    }

    return state;
}

export default reducer;