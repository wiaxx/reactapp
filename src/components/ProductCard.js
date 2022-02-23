import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className='itemCard'>
            <Link to={`/product/${product.id}`}>
                <img src={product.url} alt={product.title} width='200' />
            </Link>
            <h2 className='itemTitle'>{product.title}</h2>
            <p className='itemPrice'>{product.price}:-</p>
            <button className='addBtn'>Add to cart</button>
        </div>)
}

export default ProductCard;