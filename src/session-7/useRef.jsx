import React, {useState,useEffect,useRef} from 'react'



const UseRefExplain = () => {

    // ==============>  increase the count when button is clicked  <=================

    const [count, setCount] = useState(0);

    /*
    // this will re-render inifinity times & count will increase infinitly...
    // jsx - useEffect -> stateChange -> re-render -> jsx -> useEffect -> stateChange -> re-render -> jsx ... -> inifity 
     useEffect(()=>{
         setCount(prevCount => prevCount+1)
     })
    */
    

    // 1. everytime state change re-render of entire component happens

    /*
    useEffect(()=>{
         console.log("rerendering...")
    }) 
    */


    //  2. Lets take a normal variable and check its behaviour in react when we render.
    //  everytime state change the compoenent will re-render and the value of 'a' will assign to 0 again

    /*
    let a = 0
    useEffect(()=>{
        a =a+1
        // this will always give a as 1.
        console.log("rerendering and value of a is",a)
    })
    */


    // 3. Use useRef hook so that the value of variable will not affected on re-render of the component.
    // as u can see the value of inputRef.current is not affected by re-render of the component.

    /*
    const inputRef = useRef(0)
    useEffect(()=>{
        inputRef.current = inputRef.current+1       // -> accessing the current key and updating its value.
        console.log(inputRef)    // -> this will return object that have 1 key i.e current.
        console.log(`rerendering... the value of inputRef using useRef hook is ${inputRef.current}`)   
    })
    */


    // 4. lets see how to manipulate the elements usig useRef hook (controlled way)
    // useRef will return everything about that element in object format and we can store this and use it to manipulate the element.

    // initial value of btnRef = {current:null}
    const btnRef = useRef(null);
    // after btnRef got is reference from <button></button> from jsx.

    // btnRef = {current:button},  button -> all details.
    useEffect(()=>{
        btnRef.current.style.backgroundColor = "yellow";
    })
    

    // to make focus on input field after loading
    const [inputVlaue, setInputValue] = useState("");
    const inputRef = useRef(null);

    useEffect(()=>{
        // on first load it will focus on input field 
        inputRef.current.focus()

        // here we were changing the value of input field using state
        // but now we are manipulating the input field using useRef
        // so this is not recommened. (beacuse state is involed)

        // inputRef.current.value = "direct from useRef";

    },[inputVlaue])


    return (
        <div>
            <div>
                {/* to make focus on input field after loading */}
                <input ref={inputRef} value={inputVlaue} placeholer="enter name" onChange={(e)=>setInputValue(e.target.value)} type="text"/>
                <span>{inputVlaue}</span>

                {/* infinite times render */}
                {/* <button>Count is {count}</button> */}

                {/* every jsx element have ref properties */}
                <button ref={btnRef} onClick={()=>setCount(prevCount=>prevCount+1)} >Count is {count}</button>
            </div>
        </div>
    )

}

export default UseRefExplain;