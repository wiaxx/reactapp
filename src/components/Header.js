import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import styled from 'styled-components';
import styles from '../styles/header.module.css';
import Cart from './Cart';

const Navbar = styled.nav`
    width: 100vw;
    height: 100px;
    border-bottom: 1px solid rgb(107, 107, 107);
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    background-color: rgb(31, 56, 56);
    position: sticky;
    top: 0;
`;

const NavLink = styled(Link)`
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    text-align: center;
    margin-right: 25px;
`;

const ProductsLink = styled(NavLink)`
    margin-right: auto;
`;

const CartBtn = styled.button`
    font-size: 1.5rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: rgb(31, 56, 56);

`;

const Header = ({ cartItems, removeItem, resetCart }) => {
  const [showCart, setShowCart] = useState(false)

  return (
    <Navbar>
      <NavLink to='/'>Home</NavLink>
      <ProductsLink to='/products'>Products</ProductsLink>
      <CartBtn onClick={() => setShowCart(!showCart)}>
        <FiShoppingBag className={styles.cartIcon} />{cartItems.length}</CartBtn>
      <Cart setShowCart={setShowCart} showCart={showCart} cartItems={cartItems} removeItem={removeItem} resetCart={resetCart} />
    </Navbar>
  )
}

export default Header;