// react is been exported default way
// we are importing the react
import React from 'react'

// i have made a class and extended from React.Component class 
// here React is object which have Component as a class and we are accessing that class
class Counter extends React.Component{

    // since we are changing the counter ui based on value so we are using state
    // state and props is define in parent class React.Component

    // why here props is passed in constructor & super but not state, 
    // since both are coming from parent-class ?
    // -> state in parent class was define empty, it was not taking any value dynamicly
    // -> but props was taking value dynamicly so we have to pass props as a parameter
    // refer book for more context (class comparison)

    // the value of props is given in app.js where our <counter/> is written
    constructor(props) {
        // invoking the parent-class properties
        super(props)
        // state and props both are coming from parent class.
        this.state = {
            count:0
        }
    }

    // adding functionality for buttons

    // normal function in pure-J.S <this> referse
    // => this -> Window object (no-strict-mode)
    //    this -> undefine (strict-mode)

    // normal function in pure-J.S inside class, when we are access the class by creating new object
    // => this -> object that we have created (no-strict-mode / strict-mode)

    // normal function in React.js (strict-mode) inside class (component), here we are not accessing the class by creating new object
    // => this -> undefine 

    // to make <this> to point to its class in React, we have 2 ways
    // 1. use arrow-function because arrow-function dont have its own <this>
    // 2. binding-method, this.function-name = this.function-name.bind(this) add in constructor to give context
        //  to function that use point ur <this> to constructor <this> i.e class

    incrementBtn = () => {
        // we have 2 ways to update the state by using setState() which is given by parent-class

        // directly updating if our value is not coming dynamicly, in this case it is coming dynamicly
        // this.setState({
        //     count:this.state.count + 1
        // })
        
        // so use asynchronise way

        // preState -> this.state (it stores the previous state of this.state)
        // props -> the value which we get from parent-class
        this.setState((preState,properties) => ({
            count: preState.count + properties.diff
        }))
    }
    decrementBtn = () => {
        this.setState((preState,properties) => ({
            count: preState.count - properties.diff
        }))
    }

    // render returns jsx and do the printing process and responsible to make v-dom
    render() {
        // jsx elements should have atleast 1 parent element other-wise it will show error
        return (
            <div>
                {/* dont write this.decrementBtn() because, it will call the function without onClick event happen*/}
                <button onClick = {this.decrementBtn}>-{this.props.diff}</button>
                <h1 id="counterCount">{this.state.count}</h1>
                <button onClick = {this.incrementBtn}>+{this.props.diff}</button>
            </div>
        )
    }
}

// i just want to export class Counter so using default export
export default Counter;