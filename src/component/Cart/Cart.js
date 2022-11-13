import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    //const total=cart.reduce((total,prd) => total+prd.price, 0);
    let total = 0;
    for(let i=0;i<cart.length;i++){
        total=total+cart[i].price;
    }
    
    let shipping=0;
    if(total>55){
        shipping=0
    }
    else if(total>25){
        shipping=10.75;
    }
    else if(total>15)
    {
        shipping=25.75;
    }
    const tax=(total/10).toFixed(2);
    const topPrise=(total+shipping+Number(tax)).toFixed(2);

    
    return (
        <div className='summary_area'>
            <h2>Order Summary</h2>
             <p>Items Ordered:{cart.length}</p>
             <p>Product Price: {total}</p>
             <p><small>Shipping Cost :{shipping}</small></p>
             <p>Tax+Vat:{tax}</p>
             <p>Total Price : {topPrise}</p>
             <button className='payButton'>Pay Dolar</button>

        </div>
    );
};

export default Cart;