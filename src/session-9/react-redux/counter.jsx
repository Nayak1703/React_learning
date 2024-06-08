// 1. make a component you want, write the jsx and dont make any state because you are going to import it.
import React from 'react'

    // we have install this packages and import method from those package to our components:
    // react-redux -> To use Redux in React.
    // redux -> To use Redux functionality.

// 2. add handler-function based on the action done by user and also 
    // import dispatch hook -> to dispatch the action-type  
    // import selector hook -> to use (select) the state from store
import {useDispatch} from 'react-redux' 
import {useSelector} from 'react-redux'   



const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state)   // we have access of the state and we are returning the state;
    return (
        <div className="counterApp">
            {/* on clicking + button it should dispatch object {type:INCREMENT} */}
            <button onClick={e=> dispatch({type:"INCREMENT"})}> + </button> 
                <span> {count}  </span>
            {/* on clicking - button it should dispatch object {type:DECREMENT} */}
            <button onClick={e=> dispatch({type:"DECREMENT"})}> - </button>
        </div>
    )
}

export default Counter;
