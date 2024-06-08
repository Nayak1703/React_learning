import React from 'react'

import {useSelector} from 'react-redux'
import {getItemsSelector} from './redux/slices/cartSlice'

const Cart = () => {

    const productPriceArray = useSelector(getItemsSelector) 
    console.log(productPriceArray)
    const items = productPriceArray.length;
    const total = productPriceArray.reduce((total,ele) => total+=ele.price, 0);
    return  (
        <div className="cartContent">
            <h1>Total Items: {items} (Rs. {total}/-)</h1>
        </div>
    )
}

export default Cart;