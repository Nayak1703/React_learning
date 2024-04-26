// useState is the hook which is define in react, it is named export and it is used to define state in functional-components
import React, {useState} from 'react';

// functional-component? is a component which is define using function
// Function components which have stateless nature (unless you use hooks like useState), we can perform task on data
// recieved by parent Component(props).
// this increase reusibility
// we can achive all the funcationality (lifeCycle-methods, state, props, bind, fetching, etc...) done in class-components 
// in function-components with the help of hooks

// the function compoenent is normal J.S function, it have 2 parameter, 
// porps (object) -> properties, coming from parent class(hasA).
// ref (element) -> Reference, will taught later
// every function component return jsx by default

const Fc_1 = (props,ref) => {
    // since props is object we are destructuring the props and storing in name variable 
    const {name, diff} = props;

    // using useState hook, 
    // first i have called the function useState(), then useState() return array[] of 2 elements [stateVariable, StateFunctionName] 
    // stateVariable: name of the state u want, StateFunctionName: name of the function which is only related to the stateVariable
    // to assign variable to the value(i.e []) from useState we are using array-destructuring
    // if we want to assign initial value to the stateVariable, we can give like this useState(initialValue)
    const [count, updateCount] = useState(0);
    // if we want to define multiple state then use it again like..
    // const [count, updateCount] = useState(0);
    // const [count, updateCount] = useState(0);

    const incrementBtn = () => {
        // using StateFunctionName() to update the stateVariable 
        updateCount((prevState,prevprop)=> prevState+diff);
    }

    const decrementBtn = () => {
        updateCount((prevState,prevprop)=>prevState-diff);
    }

    return (
        <div>
            <h1>Hello, {name}</h1>
            <button onClick={incrementBtn}>+{diff}</button>
            <span>{count}</span>
            <button onClick={decrementBtn}>-{diff}</button>
        </div>
    )
}

// function Fc_1 (props,ref) {
//     const {name} = props;
//     return (
//         <div>
//             <h1>Hello, {name}</h1>
//         </div>
//     )
// }

export default Fc_1;