import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Cart from './Cart';
import './ShowCart.css';
function ShowCart() {
  

    return (
        <div className="mainContain">
        <div className="showCart">
            <Header/>
            <div className="mainpart">
                <Cart/>
            </div>
            <Footer/>
        </div>
        </div>
    )
}

export default ShowCart
