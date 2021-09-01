import React from 'react'
import './Cart.css';
import {selectCart} from '../features/pizzamenuDetails/pizzamenuDetailsSlice';
import {useSelector} from 'react-redux';
function Cart() {


    const cartItems = useSelector(selectCart);

    return (
        <div>
            {cartItems.map((data,index)=>(
                    <div key={index}  className="cartdiv">
                        <div className="cartImage">
                            <img src={data.img_url} ></img>
                            </div>
                        <div className="cart_name">
                            <h4>{data.name}</h4>
                            </div>
                            <div className="cart_price">
                                <p>Rs {data.price}</p>
                                </div>
                    </div>
            ))}
        </div>
    )
}

export default Cart
