import React, { useState, useEffect } from 'react';
import styles from '../styles/products.module.css';
import ProductCard from '../components/ProductCard';

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
    <main style={styles.main}>
      {
        products.map(product => (
          <ProductCard key={product.id} product={product} addCartItem={addCartItem} />
        ))
      }
    </main >
  )
}

export default Products;