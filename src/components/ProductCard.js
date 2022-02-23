import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addCartItem }) => {
    const [qty, setQty] = useState(1);
    
    const addItem = (e) => {
        const quantityOfItem = {
            ...product,
            qty: qty
        }
        addCartItem(quantityOfItem)
    }

    return (
        <div className='itemCard'>
            <Link to={`/product/${product.id}`}>
                <img src={product.url} alt={product.title} width='200' />
            </Link>
            <h2 className='itemTitle'>{product.title}</h2>
            <p className='itemPrice'>{product.price}:-</p>
            <span className='qtyBox'>
                <input
                    type='number'
                    placeholder='1'
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className='addQty'
                />
                <button className='addBtn' onClick={addItem}>Add to cart</button>
            </span>
        </div>)
}

export default ProductCard;