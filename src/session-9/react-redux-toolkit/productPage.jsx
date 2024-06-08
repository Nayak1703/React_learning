import React from 'react'
import Cart from './cart'
import './productPage.css'
import ProductsJson from './products.json'
import Product from './product.jsx'
const ProductPage = () =>{
    
    return (
        <div className="productsPage">
            <div className="cartNav">
                <Cart/>
            </div>
            <div className="productList">
                {
                    ProductsJson.map(product => (
                        <Product key={product.id} {...product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductPage