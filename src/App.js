import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

function App() {
	const [cartItems, setCartItems] = useState([]);

	const addCartItem = (cartItem) => {
		// const uppdatedQty =
		cartItems.map((item) =>
			item.id === cartItem.id ? (item.qty += cartItem.qty) : item
		);
		setCartItems([...cartItems, cartItem]);
	};

	const removeItem = (id) => {
		const updatedCart = cartItems.filter((item) => item.id !== id);
		setCartItems(updatedCart);
	};

	const resetCart = () => {
		setCartItems([]);
	};

	console.log("shopping cart", cartItems);

	return (
		<>
			<Header cartItems={cartItems} />
			<Routes>
				<Route path="/" element={<Products addCartItem={addCartItem} />} />
				<Route
					path="/cart"
					element={
						<Cart
							cartItems={cartItems}
							removeItem={removeItem}
							resetCart={resetCart}
						/>
					}
				/>
				<Route path="/product/:id" element={<Product />} />
				<Route
					path="/checkout"
					element={<Checkout 
                      cartItems={cartItems} 
                      removeItem={removeItem} 
                      
                      />}
				/>
			</Routes>
		</>
	);
}

export default App;
