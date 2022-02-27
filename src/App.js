import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";


function App() {
	const [cartItems, setCartItems] = useState([]);

	const addCartItem = (cartItem) => {
		const uppdatedQty = cartItems.map((item) =>
			item.id === cartItem.id ? (item.qty += cartItem.qty) : item
		);
		setCartItems([...cartItems, cartItem]);
		console.log(uppdatedQty);
	};
	console.log("shopping cart", cartItems);

	const removeItem = (id) => {
		const updatedCart = cartItems.filter((item) => item.id !== id);
		setCartItems(updatedCart);
	};

	const resetCart = () => {
		setCartItems([]);
	};

	return (
		<>
			<Header cartItems={cartItems} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/products"
					element={<Products addCartItem={addCartItem} />}
				/>
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
				<Route
					path="/product/:id"
					element={<Product addCartItem={addCartItem} />}
				/>
				<Route
					path="/checkout"
					element={
						<Checkout
							cartItems={cartItems}
							removeItem={removeItem}
							resetCart={resetCart}
						/>
					}
				/>
				<Route
					path="/products/:id"
					element={<Product addCartItem={addCartItem} />}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
