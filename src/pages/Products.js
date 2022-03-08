import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const Products = ({ addCartItem }) => {
	const [products, setProducts] = useState([]);

	const fetchData = async () => {
		try {
			const response = await fetch('https://codexplained.se/electronics.php')
			const data = await response.json();
			setProducts(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<MainContainer>
			<ProductWrap>
				{
					products.map(product => (
					<ProductCard key={product.id} product={product} addCartItem={addCartItem} />
					))

				}
			</ProductWrap>
		</MainContainer>
	)
}

const MainContainer = styled.main`
	width: 100vw;
	min-height: 70vh;
	background-color: #2d2f43;
	overflow: scroll;
	padding: 10px;
`;

const ProductWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	width: 1140px;
	max-width: 100%;
	gap: 3%;

	@media (max-width: 992px) {
		justify-content: space-between;
		gap: 0;
	}
`;

export default Products;