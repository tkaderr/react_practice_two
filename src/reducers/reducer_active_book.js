// reducers get 2 arg: state and action. Only called when action is called. State argument is not application state, but the state this reducer is responsible for
export default function(state = null, action) {
    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state 
}