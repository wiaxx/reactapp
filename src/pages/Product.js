import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = ({ addCartItem }) => {
	const [product, setProduct] = useState({});
	const params = useParams();

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
			
		</div>
	);
};

export default Product;
