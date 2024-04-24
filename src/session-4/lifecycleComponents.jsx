import React from 'react';

class LifeCycleComponent extends React.Component {
    constructor() {
        super()
        this.state ={
            count:0
        }
    }

    // function to fetch json data from api
    fetchingData = async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        console.log(data);
    }

    // this method will execute only 1 time after render() execute
    componentDidMount() {
        console.log("component did mount executed")
        // calling function fetcingData()
        this.fetchingData();
        console.log("----------------------------")
    }

    // this method will be execute whenever the state anf props value changes and after the render() executes
    // value of state & props changes -> setState() -> render () -> componentDidUpdate()
    // it have 2 parameter, 1 -> previous value of props, 2 -> previous value of state
    // this will helps us to compare current and previous value
    componentDidUpdate(prevProps,prevState) {
        console.log("component did Update executed,"+" previous state value: "+ prevState.count+", current state value: "+this.state.count)
        console.log("----------------------------")
    }

    // this method will be execute before the component get removed/unmount
    // removed/unmount means component is removed from the DOM (web page)
    componentWillUnmount() {
        console.log("The counter component is unmounted/removed")
    }

    // here if we increment/decrement by 0 this means state value is not changing, 
    // so should it will call componentDidUpdate()?
    // Yes, because when will click the +/- button increment/decrement function will trigger and this will trigger
    // this.setState() & this will trigger render() so react-reconciliton method will start and if found any changes
    // it will update real-DOM, if there is no update nothing will happen to UI,
    // but since the render() got trigger, componentDidUpdate() will get executed 
    decrement = () => {
        this.setState((prevState) => ({
            count:prevState.count-0
        }))
    }

    increment =() => {
        this.setState((prevState)=>({
            count:prevState.count+0
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <span>{this.state.count}</span>
                <button onClick={this.decrement}>-</button>                
            </div>

        )
    }



}

export default LifeCycleComponent