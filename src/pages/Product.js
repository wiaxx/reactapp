import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = ({ addCartItem }) => {
	const [product, setProduct] = useState({});
	const params = useParams();

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://codexplained.se/electronics.php" + params.id
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
	}, []);

	return (
		<div>
			<h1>Test id: {params.title} </h1>
			<img src={product.url} alt={product.title} width="200" />
			<p>{product.description}</p>
		</div>
	);
};

export default Product;
