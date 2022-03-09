import React from 'react';
import { FiTrash2 } from "react-icons/fi";
import styled from 'styled-components';
import styles from "../styles/products.module.css";
import { Link } from 'react-router-dom';

const CartItem = ({ item, removeItem }) => {
    return (
        <ItemCard>
            <Link to={`/product/${item.id}`}>
                <img src={item.url} alt={item.title} width="160" height="160" />
            </Link>
            <h2>{item.title}</h2>
            <ItemPrice>
                {item.qty} x {item.price}:-
            </ItemPrice>
            <RemoveBtn onClick={(e) => removeItem(item.id)}>
                <FiTrash2 className={styles.removeIcon} />
            </RemoveBtn>
        </ItemCard>
    )
}

const ItemCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	img {
		object-fit: contain;
	}
`;

const ItemPrice = styled.p`
	font-size: 1.2rem;
`;

const RemoveBtn = styled.button`
	background-color: white;
	border: none;
`;

export default CartItem;