// 3. Make folder of redux and inside the redux-folder make store.js to keep state and reducer-function
// -   Inside the redux.js file
// -   Import "createStore" method from redux to create the store ("createStore" is deprecrated not-used-anymore but we are using it)
// -   make a store variable and initialize it with "createStore(reducer-function)"
// -   and named export the store variable
// -   make reducer-function that take 2 parameter: 1: state (current-condition-of-state) & 2: action (type-of-action-done-by-user)
// -   and define the reducer-function based on action you want.

import {createStore} from "redux"; 

// here we have initialize default value to state and action will get its value from useDispatch hook 
const reducer = (state = 0, action) => {
    // 
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(reducer); 

export {store}