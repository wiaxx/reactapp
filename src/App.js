import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Products from './pages/Products';
import Product from './pages/Product';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (item) => {
    setCartItems([
      ...cartItems,
      item
    ])
  }

  console.log(cartItems)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Products addCartItem={addCartItem} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
