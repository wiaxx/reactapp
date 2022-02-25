import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/products.module.css";

const Checkout = ({ cartItems, resetCart, removeItem }) => {
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

				<table>
					<head>
						<tr>
							<main style={styles.main}>
								{cartItems.map((item) => (
									<div className="itemCard" key={item.id}>
										<Link to={`/product/${item.id}`}>
											<img src={item.url} alt={item.title} width="200" />
										</Link>
										<h2 className="itemTitle">{item.title}</h2>
										<p className="itemPrice">
											{item.qty} x {item.price}:-
										</p>
										<button
											className="removeBtn"
											onClick={() => removeItem(item.id)}
										>
											Remove
										</button>
										{(sum += item.price * item.qty)}
									</div>
								))}
							</main>

							<th>Product</th>
							<th>Price</th>
							<th>Quantity {} </th>
							<th>Total sum: {sum}</th>
						</tr>
					</head>
					<tbody>
						<tr>
							<td>200</td>
							<td>2</td>
							<td>400</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Checkout;
