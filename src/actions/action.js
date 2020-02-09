export function action(type, name, key) {
    return {
        type: type,
        task_obj: { id: key,  name: name}
    }
}

export function deleteAction(type, item_id) {
    return {
        type: type,
        delete_id: item_id
    }
}

export function updateAction(type, item_id, name) {
    return {
        type: type,
        update_id: item_id,
        text: name
    }
}