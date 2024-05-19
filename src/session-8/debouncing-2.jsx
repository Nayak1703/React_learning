import React, { useState, useEffect, useRef } from 'react'

// 4. making general function for debouncing, so that we can use it independently

// 5. it takes 2 parameter (function-that-should-trigger-after-some-delay & time-to-dealy) and this return a function.
// here concept of "clouser" is applied
const debounce = (func, delay) => {

    // it will store the uniqe-id of the setTimeout()
    let timeOutId;

    // since we are returing child function so it is closer, it have access of all the variables of the parent.
    // if we dont know how many arguments will passed in this function so we are using spread-syntax
    // it will store all the arguments passed in function as array named args
    return function (...args) {
        if(timeOutId){
            // if setTimeout is running in backend, and another time setTimeout got trigger then it will clear
            // previous setTimeout with the help of timeOutId which store the reference of running setTimeout()
            clearTimeout(timeOutId)
        }

        // all the function related to setTimeout() is given by browser not javascript
        // here setTimeOut takes 2 parameter (callback-function-i.e-calling-function-that-should-trigger-after-some-delay
        // && time-to-delay)
        // timeOutId will store the uniqe-id, return by setTimeout(), this uniqe-id will refer to its own setTimeout()
        timeOutId = setTimeout(()=>func(...args),delay)
    }

}

const DebouncingImplementation = () => {

    // 2. storing the input text in the state (searchInput)
    const [searchInput,setSearchInput] = useState("");

    // 3. making function that should called after fixed amount of time (debouncing).
    const handleInput = (searchText) =>{
        console.log(searchText)
    } 

    // 6. initializing variable to store the function that is returning from debounce function,
    //    the debounceFunc variable will get reinitalize everytime when state changes, so we are using useRef hook
    //    so that the value (i.e function) of debounceFunc variable should not get affect when state is changing 
    const debounceFunc = useRef(debounce(handleInput,1000)).current;
    // useRef(debounce(handleInput,1000)).current -> return a child-function of (debounce), then outter function
    // i.e (debounce) will get destroyed.
    // then how debounceFunc() innerfunction will get all the value of the outter function variable for execuation.
    // we need to know about some clouser functionality, check clouser.drawio

    // 7. now we want that when-ever state changes debounceFunc() should get trigger. so use useEffect() hook
    useEffect(()=>{
        if(searchInput)
            debounceFunc(searchInput)

    },[searchInput])



    return (
        <>  
            {/* 1. make the inpute of type text and updating the state using "setSearchInput" */}
            <input type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
        </>
    )
}


export default DebouncingImplementation