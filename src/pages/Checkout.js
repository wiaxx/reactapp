import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutModal from "../components/CheckoutModal";

const Checkout = ({ cartItems, resetCart, removeItem }) => {
	let sum = 0;
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal((prev) => !prev);
	};

	return (
		<div>
			{/*Total container div*/}
			<div>
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
			<div>
				{/*Total container div for items card*/}

				{cartItems.length > 0 ? (
					cartItems.map((item) => (
						<div className="itemCard" key={item.id}>
							<Link to={`/product/${item.id}`}>
								<img src={item.url} alt={item.title} width="50" />
							</Link>
							<h2 className="itemTitle">{item.title}</h2>
							<p className="itemPrice">
								{item.qty} x {item.price}:-
							</p>
							<button className="removeBtn" onClick={() => removeItem(item.id)}>
								Remove
							</button>
							{(sum += item.price * item.qty)}
						</div>
					))
				) : (
					<>
						<h1>Your shopping cart is empty</h1>
						<Link to="/products">
							<button>Go to products</button>
						</Link>
					</>
				)}
				<p>Total sum: {sum}</p>
				<button onClick={resetCart}>Empty shopping bag</button>
			</div>
			<button onClick={openModal}>Place Order</button>

			<CheckoutModal showModal={showModal} setShowModal={setShowModal} />
		</div>
	);
};

export default Checkout;
