import React, { useState } from 'react';
import styled from 'styled-components';

const Admin = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        title: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        image: '',
    })

    const handleNewProduct = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        setNewProduct({
            ...newProduct,
            [inputName]: inputValue
        })
    }

    const saveProduct = async (e) => {
        e.preventDefault();

        const requestOption = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        }

        try {
            const response = await fetch('http://localhost:5000/products/', requestOption);
            const data = await response.json();
            console.log(data)
            setNewProduct({
                title: '',
                description: '',
                price: '',
                stock: '',
                category: '',
                image: '',
            })
        } catch (error) {
            console.log(JSON.parse(error))
        }
    }

    const getAllProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/products/')
            const data = await response.json();
            setAllProducts(data);
        } catch (error) {
            console.log(JSON.parse(error))
        }
    }

    const deleteProduct = async (id) => {
        try {
            const response = await fetch('http://localhost:5000/products/' + id, { method: 'DELETE' })
            const data = response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <FormDiv onSubmit={saveProduct}>
                <h1>Add new product.</h1>
                <input type='text' name='title' required placeholder='Title' onChange={handleNewProduct} value={newProduct.title} />
                <input type='text' name='description' placeholder='Description' onChange={handleNewProduct} value={newProduct.description} />
                <input type='number' name='price' required placeholder='Price' onChange={handleNewProduct} value={newProduct.price} />
                <input type='number' name='stock' required placeholder='Stock' onChange={handleNewProduct} value={newProduct.stock} />
                <input type='text' name='category' placeholder='Category' onChange={handleNewProduct} value={newProduct.category} />
                <input type='text' name='image' required placeholder='Image URL' onChange={handleNewProduct} value={newProduct.image} />
                <button>Save</button>
            </FormDiv>
            <AllProductButton onClick={getAllProducts}>Get all products</AllProductButton>
            <ProductDiv>
                {allProducts.map(product =>
                    <div key={product._id}>
                        <img src={product.image} alt={product.title} width='200' />
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <button>Update product</button>
                        <button onClick={() => deleteProduct(product._id)}>Delete product</button>
                    </div>
                )}
            </ProductDiv>
        </>
    )
}

const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 10px;

    h1 {
        margin: 3px;
        color: darkgrey;
    }

    input {
        height: 50px;
        padding: 10px;
        margin: 3px;
        font-size: 1.2rem;
    }

    button {
        background-color: white;
        border: 1px solid lightgrey;
        border-radius: 3px;
        height: 50px;
        margin: 3px;
        padding: 10px;
        font-size: 1.2rem;
    }
`;

const AllProductButton = styled.button`
    background-color: yellow;
    text-transform: uppercase;
    font-weight: bold;
    border: 1px solid lightgrey;
    border-radius: 3px;
    height: 50px;
    margin: 13px;
    padding: 10px;
    font-size: 1.2rem;
    &:hover {
        background-color: pink:
    }
`;

const ProductDiv = styled.div`
    display: flex;
    gap: 15px;
    margin: 3px;
    padding: 10px;
`;

export default Admin;