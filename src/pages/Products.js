import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100vw;
    min-height: 70vh;
    display: flex;
    flex-wrap: wrap;
    background-color: darkslategray;
    overflow: scroll;
    padding: 10px;
`;

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
      {
        products.map(product => (
          <ProductCard key={product.id} product={product} addCartItem={addCartItem} />
        ))
      }
    </MainContainer >
  )
}

export default Products;