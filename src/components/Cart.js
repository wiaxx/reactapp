import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, resetCart, removeItem }) => {
	let sum = 0;

  return (
    <main className='cartDiv'>
      {
        cartItems.length > 0
        ? cartItems.map(item => (
          <div className='itemCard' key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={item.url} alt={item.title} width='200' />
            </Link>
            <h2 className='itemTitle'>{item.title}</h2>
            <p className='itemPrice'>{item.qty} x {item.price}:-</p>
            <button className='removeBtn' onClick={() => removeItem(item.id)}>Remove</button>
            {sum += item.price * item.qty}
            </div>
            ))
            : <>
            <h1>Your shopping cart is empty</h1> 
            <Link to='/products'><button>Go to products</button></Link>
            </>
      }
      <p>Total sum: {sum}</p>
      <button onClick={resetCart}>Empty shopping bag</button>
      <Link to='/checkout'><button>Go to checkout</button></Link>
    </main>
  )
}

export default Cart;
