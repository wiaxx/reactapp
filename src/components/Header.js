import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import styled from 'styled-components';
import styles from '../styles/header.module.css';

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

const Header = ({ cartItems }) => {
  return (
    <Navbar>
      <Link to='/' className={styles.navLink}>Home</Link>
      <Link to='/products' className={styles.productsLink}>Products</Link>
      <Link to='/cart' className={styles.IconLink}>
        <FiShoppingBag className={styles.cartIcon} />{cartItems.length}</Link>
    </Navbar>
  )
}

export default Header;