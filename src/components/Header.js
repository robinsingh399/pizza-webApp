import React from 'react'
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
function Header() {

    

    return (
        <div className="header">
           
            <Link to="/" className="logo">
            <div >
            <p>Pizza App</p>
            </div>
            </Link>
            
            <Link to="/cart" className="cartHover">
            <div className="cart">
                    <ShoppingCartIcon/>
                    <label>Cart</label>
            </div>
            </Link>
           
        </div>
    )
}

export default Header
