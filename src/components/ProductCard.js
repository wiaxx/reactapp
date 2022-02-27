import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../styles/products.module.css';

const ItemCard = styled.div`
    width: 33%;
    height: 500px;
    margin: 2px;
    // border: 0.5px solid rgb(54, 97, 97);
    // border-radius: 10px;
    box-shadow: 0.5px 0.5px 0.5px rgb(38, 71, 71);
    // padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: white;
`;

const TextDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 0;
    margin-bottom: 6px;
`;

const Text = styled.p`
    color: rgb(47, 49, 49);
    font-size: 1.5rem;
    margin: 0;
`;

const QuantityDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 7px;
`;

const AddButton = styled.button`
    border: none;
    background-color: rgb(47, 49, 49);
    color: white;
    font-size: 1.4rem;
    &:hover,
    &:focus {
      background-color: white;
      color: black;
      border: 0.5px solid black;
    }
`;

const ChangeQty = styled.input`
    border: 0.5px solid black;
    font-size: 1.4rem;
    width: 70px;
`;

const ProductCard = ({ product, addCartItem }) => {
    const [qty, setQty] = useState(1);

    const addItem = (e) => {
        const quantityOfItem = {
            ...product,
            qty: qty
        }
        addCartItem(quantityOfItem)
    }

    return (
        <ItemCard>
            <Link to={`/product/${product.id}`} className={styles.productLink}>
                <img src={product.url} alt={product.title} className={styles.productImg} />
            </Link>
            <TextDiv>
                <Text className='itemTitle'>{product.title}</Text>
                <Text className='itemPrice'>{product.price} SEK</Text>
            </TextDiv>
            <QuantityDiv>
                <ChangeQty
                    type='number'
                    placeholder='1'
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className='addQty'
                />
                <AddButton onClick={addItem}>Add to cart</AddButton>
            </QuantityDiv>
        </ItemCard>)
}

export default ProductCard;