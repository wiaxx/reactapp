import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/products.module.css';
import styled from 'styled-components';
import { FiTrash2 } from 'react-icons/fi';
import { motion } from 'framer-motion';

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
          cartItems.map(item => (
            <ItemCard key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img src={item.url} alt={item.title} width='160' />
              </Link>
              <h2>{item.title}</h2>
              <ItemPrice>{item.qty} x {item.price}:-</ItemPrice>
              <RemoveBtn onClick={() => removeItem(item.id)}><FiTrash2 className={styles.removeIcon} /></RemoveBtn>
            </ItemCard>
          ))
        }
        {
          cartItems.length > 0
            ? <RemoveAllBtn onClick={resetCart}>Remove all items</RemoveAllBtn>
            : null
        }
        <ModalFooter>
          <h2>Total price: {sum} kr</h2>
          <Link to='/checkout'><CheckoutBtn>Proceed to checkout</CheckoutBtn></Link>
        </ModalFooter>
      </ModalContent>
    </ModalDiv>
  )
}

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
    align-items: center;
`;

const ItemPrice = styled.p`
    font-size: 1.2rem;
`;

const RemoveBtn = styled.button`
  background-color: white;
  border: none;
`;

const RemoveAllBtn = styled(RemoveBtn)`
  font-size: 1.3rem;
  margin-top: 5px;
  border: 0.5px solid lightgrey;
  border-radius: 5px;
  padding: 3px;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

const ModalFooter = styled.div`
  border-top: 1px solid grey;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckoutBtn = styled.button`
    border: 0.5px solid grey;
    background-color: white;
    color: black;
    font-size: 1.3rem;
    border-radius: 5px;
    &:hover,
    &:focus {
      background-color: rgb(47, 49, 49);
      color: white;
    }
`;

export default Cart;