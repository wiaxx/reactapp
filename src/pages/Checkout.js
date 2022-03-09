import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutModal from "../components/CheckoutModal";
import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import styles from "../styles/products.module.css";
import { motion } from "framer-motion";

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
			<InfoDiv>
				<InputContainer>
					{/* container div for info*/}
					<div>
						{/*container div basic*/}
						<h3>Basic Information</h3>
						<div>
							{/*container div names*/}
							<label>
								<p>First Name</p>
							</label>
							<input type="text" placeholder="John" />
						</div>
						<div>
							{/*container div names*/}
							<label>
								<p>Last Name</p>
							</label>
							<input type="text" placeholder="Doe" />
						</div>
						<div>
							{/*container div names*/}
							<label>
								<p>Phonenumber</p>
							</label>
							<input type="number" placeholder="070-xxxx xxx" />
						</div>
						<div>
							{/*container div names*/}
							<label>
								<p>Email</p>
							</label>
							<input type="email" placeholder="John.doe@mail.mia" />
						</div>
						<div>
							{/*container div names*/}
							<label>
								<p>Address</p>
							</label>
							<input type="text" placeholder="Baboonroad 65" />
						</div>
						<div>
							{/*container div names*/}
							<label>
								<p>City</p>
							</label>
							<input type="text" placeholder="Detroit" />
						</div>
						<div>
							{/*container div names*/}
							<label>
								<p>Zip Code</p>
							</label>
							<input type="number" placeholder="xxxxx" />
						</div>
					</div>
				</InputContainer>
				<CardsDiv>
					{/*Total container div for item cards*/}
					{cartItems.length > 0 ? (
						cartItems.map((item) => (
							<ItemCard key={item.id}>
								<Link to={`/product/${item.id}`}>
									<img
										src={item.url}
										alt={item.title}
										width="160"
										height="160"
									/>
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
						<EmptyCartDiv>
							<motion.h1 animate={{ rotate: 360 }}>
								Your shopping cart is empty
							</motion.h1>
							<Link to="/products">
								<button>Go to products</button>
							</Link>
						</EmptyCartDiv>
					)}
					<TotalSum>Total sum: {sum}</TotalSum>
					<RemoveAllBtn onClick={resetCart}>Remove all items</RemoveAllBtn>{" "}
				</CardsDiv>
			</InfoDiv>
			<OrderBtn onClick={openModal}>Place Order</OrderBtn>

			<CheckoutModal
				resetCart={resetCart}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</TotalContainer>
	);
};

const InfoDiv = styled.div`
	display: flex;
	justify-content: space around;
	align-items: stretch;
`;

const CardsDiv = styled.div`
	display: ;
`;
const OrderBtn = styled.button`
	font-size: 3rem;
	background-color: #23a455;
	color: #ffffff;
	position: absolute;
	right: 50%;
	bottom: 0;
`;

const InputContainer = styled.div`
	align-self: center;
`;
const TotalSum = styled.p`
	font-size: 2rem;
`;

const EmptyCartDiv = styled.div`
	display: flex;
	justify-content: center;
`;

const TotalContainer = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: space-evenly;
	padding-left: 50px;
	padding-right: 50px;
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
