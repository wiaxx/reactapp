import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import styled from 'styled-components';
import styles from '../styles/header.module.css';
import Cart from './Cart';
import { motion } from "framer-motion";

const Header = ({ cartItems, removeItem, resetCart }) => {
	const [showCart, setShowCart] = useState(false)

	return (
		<Navbar>
			<div className="nav-wrap">
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/admin'>Admin</NavLink>
			<ProductsLink to='/products'>Products</ProductsLink>
				<CartBtn
					as={motion.button}
					whileHover={{
						scale: 1.2,
					}}
					onClick={() => setShowCart(!showCart)}>
					<FiShoppingBag className={styles.cartIcon} />{cartItems.length}</CartBtn>
				<Cart setShowCart={setShowCart} showCart={showCart} cartItems={cartItems} removeItem={removeItem} resetCart={resetCart} />
			</div>
		</Navbar>
	)
}

const Navbar = styled.nav`
	width: 100vw;
	height: 100px;
	border-bottom: 1px solid #888d98;
	padding-left: 20px;
	padding-right: 20px;
	background-color: #202331;
	position: sticky;
	top: 0;
	z-index: 1;

	.nav-wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 1140px;
		max-width: 100%;
		margin: 0 auto;
	}
`;

const NavLink = styled(Link)`
	font-size: 1.5rem;
	text-decoration: none;
	text-transform: uppercase;
	color: white;
	text-align: center;
	margin-right: 25px;
	position: relative;

	::after {
		content: '';
		border-bottom: 1px solid white;
		display: block;
		transform: scaleX(0);
		transition: transform ease 500ms;
	}

	:hover::after {
		transform: scaleX(1);
	}
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
	background-color: #202331;
`;

export default Header;