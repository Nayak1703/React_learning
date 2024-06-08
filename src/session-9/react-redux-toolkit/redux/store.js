// 1. To use React-redux-toolkit we have to install "npm install @reduxjs/toolkit"
    // Here we dont have createStore() method because it ie depricated but we use configureStore() method
    // which is recommended by react-redux
import {configureStore} from '@reduxjs/toolkit'

// 2. Previously we are defining the reducer differently and we were passing the reducer function inside the createStore()
    // here we are passing the object {} and inside that object we are having reducer:{} object
    // inside this reducer object we will keep all our reducer

// 3. In redux-toolkit is scalable so we dont write the reducer-function directly here, we make slice for every
// feature our web-app example here cart is a feature so we make seperate file called cart.js inise redux/slices/cart.js
// and here we will write reducer-function code of the cart feature and import that reducer-function of that slice feature
// here and use in inside the reducer of configureStore().
// each feature of the website in a slice

import cartReducer from './slices/cartSlice';
const store = configureStore({
    reducer: {
        cart:cartReducer,
    }
}); 

export {store}


// const stateValue = {
//     item: [],
// }
// stateValue.item.pop()
// console.log(stateValue)

// const reducer = (state = stateValue.item, action) => {
//     // if(action.type.length) {
//         const priceArray = action.type.split(",")
        
//         stateValue.item.push(...priceArray)
//         return stateValue.item
//     }
//     // else {
//         // console.log(state)
//         // return state;
//     // }
// // }