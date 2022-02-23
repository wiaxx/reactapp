import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/products.module.css';

const Cart = ({ cartItems }) => {
  let sum = 0;

  return (
    <main style={styles.main}>
      {
        cartItems.map(item => (
          <div className='itemCard' key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={item.url} alt={item.title} width='200' />
            </Link>
            <h2 className='itemTitle'>{item.title}</h2>
            <p className='itemPrice'>{item.qty} x {item.price}:-</p>
            <button className='removeBtn' onClick={() => console.log(item)}>Remove</button>
            {sum += item.price * item.qty}
            </div>
            ))
      }
      <p>Total sum: {sum}</p>
      <h1>Your shopping cart is empty</h1>
      <button>Empty shopping bag</button>
    </main>
  )
}

export default Cart;