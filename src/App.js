import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";

function App() {
	const [cartItems, setCartItems] = useState([]);

	const addCartItem = (cartItem) => {
		const itemExist = cartItems.filter((item) => item.id === cartItem.id);
		console.log(addCartItem);

		itemExist.length > 0
			? cartItems.map((item) =>
					item.id === cartItem.id ? (item.qty += cartItem.qty) : item
			  )
			: setCartItems([...cartItems, cartItem]);
	};

	const removeItem = (id) => {
		const updatedCart = cartItems.filter((item) => item.id !== id);
		setCartItems(updatedCart);
	};

	const resetCart = () => {
		setCartItems([]);
	};

	return (
		<>
			<Header
				cartItems={cartItems}
				removeItem={removeItem}
				resetCart={resetCart}
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/products"
					element={<Products addCartItem={addCartItem} />}
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
							setCartItems={setCartItems}
						/>
					}
				/>
				<Route
					path="/products/:id"
					element={<Product addCartItem={addCartItem} />}
				/>
				<Route path='/admin' element={<Admin />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
