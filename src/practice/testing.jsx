import React from 'react'
import Child from './child.jsx'

const Testing = () => {

    const obj = {
        name:"yash",
        age:24,
        city:"mum"
    }

    return (
        <div><Child {...obj}/></div>
    )
}

export default Testing;