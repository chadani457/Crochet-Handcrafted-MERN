import React, { useState } from 'react';
import { useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/Logo.png'; 
import cart_icon from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {

    const [menu, setMenu] = useState("shop");
     const {getTotalCartItems} = useContext(ShopContext); 
    
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Logo" /> 
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("bags") }}>
                    <Link style={{ textDecoration: 'none' }} to='/bags'>Bags</Link>
                    {menu === "bags" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("scarf and beanie") }}>
                    <Link style={{ textDecoration: 'none' }} to='/scarf and beanie'>Scarf & Beanie</Link>
                    {menu === "scarf and beanie" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("tops") }}>
                    <Link style={{ textDecoration: 'none' }} to='/tops'>Tops</Link>
                    {menu === "tops" ? <hr /> : <></>}
                </li>
            </ul>

            <div className="nav-login-cart">
                <Link to="/Login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="Cart Icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
