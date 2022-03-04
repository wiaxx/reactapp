import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Product = ({ addCartItem }) => {
	const [product, setProduct] = useState({});
	const [qty, setQty] = useState(1);

	const params = useParams();

	const addItem = () => {
		const quantityOfItem = {
			...product,
			qty: Number(qty),
		};
		addCartItem(quantityOfItem);
	};

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://codexplained.se/electronics.php?id=" + params.id
			);
			const data = await response.json();
			console.log(data);

			setProduct(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<h1>{product.title} </h1>
			<img src={product.url} alt={product.title} width="200" />
			<p>{product.description}</p>
			<h5>Stock: {product.storage} </h5>
			<p>Pris: {product.price} </p>
			<QuantityDiv>
				<ChangeQty
					type="number"
					placeholder="1"
					value={qty}
					onChange={(e) => setQty(e.target.value)}
					className="addQty"
				/>
				<AddButton onClick={addItem}>Add to cart</AddButton>
			</QuantityDiv>
		</div>
	);
};

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

const QuantityDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-left: 10px;
	padding-right: 10px;
	margin-bottom: 7px;
`;

const ChangeQty = styled.input`
	border: 0.5px solid black;
	font-size: 1.4rem;
	width: 70px;
`;
export default Product;
