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
		<ProductPage>
			<div class="product-wrap">
				<ProductHeading>
					{product.title}
				</ProductHeading>
				<ProductImage
					src={product.url}
					alt={product.title}
					width="500"
					height="200"
				/>
				<ProductDescription>
					{product.description}
				</ProductDescription>
				<ProductStock>
					<h3>Stock: </h3>
					<p>{product.storage}</p>
				</ProductStock>
				<ProductPrice>
					<h3>Pris: </h3>
					<p>{product.price}</p>
				</ProductPrice>
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
		</ProductPage>
	);
};

const ProductPage = styled.div`
	background-color: #2d2f43;

	.product-wrap {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0 auto;
		padding: 20px;
		gap: 12px;
		width: 1140px;
		max-width: 100%;
		background-color: #ffffff;
	}
`;

const ProductHeading = styled.h2`
	flex: 1 1 100%;
`;

const ProductImage = styled.img`
	object-fit: contain;
	object-position: left;
	flex: 0 1 30%;
`;

const ProductDescription = styled.p`
	flex: 1 1 50%;
`;

const ProductPrice = styled.p`
	margin: 0;
	margin-left: auto;
	padding: 20px;

	h3 {
		margin: 0;
		display: inline;
	}

	p {
		display: inline;
	}
`;

const ProductStock = styled.div`
	flex: 0 1 30%;
	padding: 20px;
	background-color: #ededf6;
	border-radius: 4px;

	h3 {
		margin: 0;
		display: inline;
	}

	p {
		display: inline;
	}
`;

const AddButton = styled.button`
	border: none;
	background-color: rgb(47, 49, 49);
	color: white;
	font-size: 1.4rem;
	border: 0.5px solid black;

	&:hover,
	&:focus {
		background-color: white;
		color: black;
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
