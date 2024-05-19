import React, {useState, useEffect, useRef} from 'react'

const debounce = (func,delay) => {
    let timeOut;
    return function (argu) {
        if(timeOut)
            clearTimeout(timeOut)
        timeOut=setTimeout(()=>func(argu),delay)
    }
}

const Testing = () => {
    const [textValue, setTextValue] = useState("")

    const apiFunction = (textValue) => {
        console.log(textValue)    
    }

    let debounceInnerFunc = useRef(debounce(apiFunction,1000)).current

    useEffect(()=>{
        if(textValue)
            debounceInnerFunc(textValue)
    },[textValue])

    return (
        <>
            <input type="text" value={textValue} onChange={(e)=>setTextValue(e.target.value)}/>
        </>
    )
}

export default Testing;