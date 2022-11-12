import React from 'react';
import { FaBiking } from "react-icons/fa";
import './Product.css'; 

const Product = (props) => {
    //console.log(props);
    return (
        <div className='product'>
            <div>
                <img src={props.product.img} alt="" />

            </div>
            <div className='product-name'>
            <h3>{props.product.name}</h3>
            <br />
            <p><small>By : {props.product.seller}</small></p>
            <p>${props.product.price}</p>
            <br />
            <p><small>Only {props.product.stock} left in stock-- Order Soon.</small></p>
            <button className='main-button' onClick={()=>props.handleAddProduct(props.product)}>
                < FaBiking/>Add To Cut</button>
            </div>
            
        </div>
    );
};

export default Product;