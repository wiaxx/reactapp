import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import CartItem from './CartItem';

const Cart = ({ cartItems, resetCart, removeItem, showCart, setShowCart }) => {
	if (!showCart) {
		return null;
	}

	let sum = 0;
	if (cartItems.length > 0) {
		cartItems.map((item) => (sum += item.price * item.qty));
	}

	const hideCart = (e) => {
		if (e.target.id === 'modal') {
			setShowCart(false)
		}
	}

	return (
		<ModalDiv
			as={motion.div}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			id='modal'
			onClick={(e) => hideCart(e)}
		>
			<ModalContent
				as={motion.div}
				initial={{ x: "600px" }}
				animate={{ x: 0 }}
				transition={{ ease: "easeIn", duration: 1.5 }}
			>

				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} removeItem={removeItem} />
				))}

				{cartItems.length > 0 ? (
					<RemoveAllBtn onClick={resetCart}>Remove all items</RemoveAllBtn>
				) : <h1>Cart is empty..</h1>}

				<ModalFooter>
					<h2>Total price: {sum} kr</h2>
					<Link to="/checkout">
						<CheckoutBtn>Proceed to checkout</CheckoutBtn>
					</Link>
				</ModalFooter>
			</ModalContent>
		</ModalDiv>
	);
};

const ModalDiv = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
	overflow: scroll;
`;

const ModalContent = styled.div`
	width: 35vw;
	margin-top: 85px;
	margin-left: auto;
	margin-right: 12px;
	min-height: 200px;
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 10px;
	padding: 10px;
`;

const RemoveBtn = styled.button`
	background-color: white;
	border: none;
`;

const RemoveAllBtn = styled(RemoveBtn)`
	font-size: 1.3rem;
	margin-top: 5px;
	border: 0.5px solid lightgrey;
	border-radius: 5px;
	padding: 3px;
	&:hover {
		background-color: grey;
		color: white;
	}
`;

const ModalFooter = styled.div`
	border-top: 1px solid grey;
	margin-top: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const CheckoutBtn = styled.button`
	border: 0.5px solid grey;
	background-color: white;
	color: black;
	font-size: 1.3rem;
	border-radius: 5px;
	&:hover,
	&:focus {
		background-color: rgb(47, 49, 49);
		color: white;
	}
`;

export default Cart;
