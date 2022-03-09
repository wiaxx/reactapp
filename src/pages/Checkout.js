import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutModal from "../components/CheckoutModal";
import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import styles from "../styles/products.module.css";

const Checkout = ({ cartItems, resetCart, removeItem, setCartItems }) => {
	let sum = 0;
	if (cartItems.length > 0) {
		cartItems.map((item) => (sum += item.price * item.qty));
	}

	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal((prev) => !prev);
	};

	const modifyQty = (id, qty) => {
		setCartItems((prevItems) =>
			prevItems
				.map((item) =>
					item.id === id
						? {
								...item,
								qty: item.qty + qty,
						  }
						: item
				)
				.filter((item) => item.qty > 0)
		);
	};
	

	return (
		<TotalContainer>
			{/*Total container div*/}
			<div className="inputs">
				{/* container div for info*/}
				<div>
					{/*container div for path styling*/}
					<h5>Home / Checkout</h5>
				</div>
				<div>
					{/*container div basic*/}
					<h3>Basic Information</h3>
					<div>
						{/*container div names*/}
						<label>First Name</label>
						<input type="text" name="firstname" />
					</div>
					<div>
						{/*container div names*/}
						<label>Last Name</label>
						<input type="text" name="lastname" />
					</div>
					<div>
						{/*container div names*/}
						<label>Phone Number</label>
						<input type="number" name="firstname" />
					</div>
					<div>
						{/*container div names*/}
						<label>Email Address</label>
						<input type="text" name="firstname" />
					</div>
					<div>
						{/*container div names*/}
						<label>Address</label>
						<input type="text" name="firstname" />
					</div>
					<div>
						{/*container div names*/}
						<label>City</label>
						<input type="text" name="firstname" />
					</div>
					<div>
						{/*container div names*/}
						<label>Zip Code</label>
						<input type="text" name="firstname" />
					</div>
				</div>
			</div>
			<div className="itemcards">
				{/*Total container div for item cards*/}
				{cartItems.length > 0 ? (
					cartItems.map((item) => (
						<ItemCard key={item.id}>
							<Link to={`/product/${item.id}`}>
								<img src={item.url} alt={item.title} width="160" height="160" />
							</Link>
							<button
								type="button"
								onClick={() => modifyQty(item.id, -1)}
								className="subtractButton"
							>
								-
							</button>
							<h2>{item.title}</h2>
							<button
								type="button"
								onClick={() => modifyQty(item.id, 1)}
								className="addButton"
							>
								+
							</button>
							<ItemPrice>
								{item.qty} x {item.price}:-
							</ItemPrice>
							<RemoveBtn onClick={() => removeItem(item.id)}>
								<FiTrash2 className={styles.removeIcon} />
							</RemoveBtn>
						</ItemCard>
					))
				) : (
					<>
						<h1>Your shopping cart is empty</h1>
						<Link to="/products">
							<button>Go to products</button>
						</Link>
					</>
				)}
				<TotalSum>Total sum: {sum}</TotalSum>
				<RemoveAllBtn onClick={resetCart}>Remove all items</RemoveAllBtn>{" "}
			</div>
			<button onClick={openModal}>Place Order</button>

			<CheckoutModal
				resetCart={resetCart}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</TotalContainer>
	);
};

const TotalSum = styled.p`
	font-size: 2rem;
`;

const TotalContainer = styled.div`
	width: 100vw;
	min-height: 75vh;
	display: flex;
	flex-wrap: wrap;
	background-color: #2d2f43;
`;

const ItemCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	img {
		object-fit: contain;
	}
`;

const ItemPrice = styled.p`
	font-size: 1.2rem;
`;

const RemoveBtn = styled.button`
	background-color: white;
	border: none;
`;

const RemoveAllBtn = styled(RemoveBtn)`
	font-size: 1.3rem;
	background-color: red;
	margin-top: 5px;
	border: 0.5px solid lightgrey;
	border-radius: 5px;
	padding: 3px;
	&:hover {
		background-color: grey;
		color: white;
	}
`;

export default Checkout;
