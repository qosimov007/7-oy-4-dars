const    defaultState ={
    todos: []
}

 export function todoReducer(state = defaultState, actions ){
    if(actions.type == 'TODO_ADD'){
        return {
         ...state,
            todos: state.todos.push(actions.payload)
        }
    } else if(actions.type == 'TODO_REMOVE'){
        let copied = JSON.parse(JSON.stringify(state.todos));
        copied = copied.filter(el => {
            return el.id !== actions.payload.id
        })
        return{...state, todos: copied}
    }else{
        return state; 
    }

}