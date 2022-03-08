import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../styles/products.module.css';
import { motion } from 'framer-motion';

const ProductCard = ({ product, addCartItem }) => {
	const [qty, setQty] = useState(1);

	const addItem = () => {
		const quantityOfItem = {
			...product,
			qty: Number(qty)
		}
		addCartItem(quantityOfItem)
	}

	return (
		<ItemCard
			as={motion.div}
			whileHover={{
				scale: 1.01,
			}}
		>
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

const ItemCard = styled.div`
	box-shadow: 0.5px 0.5px 0.5px #212331;
	margin: 16px 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background-color: white;
	border-radius: 4px;
	width: 31.33%;

	::last-child {
		margin-right: auto;
	}

	@media (max-width: 992px) {
		width: 48%;
	}
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

export default ProductCard;