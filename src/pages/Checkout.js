import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";

const Checkout = ({ cartItems, resetCart, removeItem, }) => {
	let sum = 0;

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
					<div>
						<button>Place Order</button>
					</div>
				</div>
			</div>
			<div>
				{/*Total container div for items card*/}

				{cartItems.map((item) => (
					<>
						<p>Product {item.title}</p>
						<p>Price {item.price}</p>
						<p>Quantity {item.qty} </p>
						{(sum += item.price * item.qty)}
					</>
				))}
				<p>Total sum: {sum}</p>
			</div>
		</div>
	);
};

export default Checkout;
