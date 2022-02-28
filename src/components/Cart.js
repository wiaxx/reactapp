import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiTrash2 } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ModalDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  z-index: 1;
`;

const ModalContent = styled.div`
    width: 35vw;
    margin-top: 85px;
    margin-left: auto;
    margin-right: 12px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
`;

const ItemCard = styled.div`
    display: flex;
    justify-content: space-between;
`;

// const CartBtn = styled.button`
//     border: none;
//     background-color: rgb(47, 49, 49);
//     color: white;
//     font-size: 1.4rem;
//     &:hover,
//     &:focus {
//       background-color: white;
//       color: black;
//       border: 0.5px solid black;
//     }
// `;

const Cart = ({ cartItems, resetCart, removeItem, showCart, setShowCart }) => {
  if (!showCart) {
    return null;
  }

  let sum = 0;
  if (cartItems.length > 0) {
    cartItems.map(item => sum += (item.price * item.qty))
  }

  return (
    <ModalDiv
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      onClick={() => setShowCart(false)}>
      <ModalContent>
        {
          cartItems.length > 0
            ? cartItems.map(item => (
              <ItemCard key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img src={item.url} alt={item.title} width='200' />
                </Link>
                <h2 className='itemTitle'>{item.title}</h2>
                <p className='itemPrice'>{item.qty} x {item.price}:-</p>
                <button className='removeBtn' onClick={() => removeItem(item.id)}><FiTrash2 /></button>
              </ItemCard>
            ))
            : <>
              <h1>Your shopping cart is empty</h1>
              <Link to='/products'><button>Go to products</button></Link>
            </>
        }
        <p>Total sum: {sum}</p>
        <button onClick={resetCart}>Remove all items</button>
        <Link to='/checkout'><button>Go to checkout</button></Link>
      </ModalContent>
    </ModalDiv>
  )
}

export default Cart;
