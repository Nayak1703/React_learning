import React from "react";

import { useDispatch } from "react-redux";

import {addItem} from './redux/slices/cartSlice'

const Product = (product) => {
  const dispatch = useDispatch();


  return (
    <div className="productCard">
      <div className="productImg">
        <img src={product.image} alt={product.productName} />
      </div>
      <div className="productDetails">
        <h3 className="productTitle">{product.productName}</h3>
        <h4 className="productPrice">Rs. {product.price}/-</h4>
        <button
          className="addCartBtn"
          onClick={(e) => {
           return dispatch(addItem({name:product.productName, price:product.price}));
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Product;
