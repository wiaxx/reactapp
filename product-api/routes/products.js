const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try{ 
        const products = await Product.find();
        res.send(products);
    } catch(error)  {
        res.send({message: error});
    }
});

// Create product
router.post('/', async (request, response) => {
    // response.send(request.body);
    // response.send(request.body.tags); // Dessa hanterar olika delar i objektet, tex .title / .tags / .author etc 

    const product = new Product({
        title:          request.body.title,
        description:    request.body.description,
        price:          request.body.price,
        stock:          request.body.stock,
        category:       request.body.category,
        image:          request.body.image
    });

    try {
        const savedProduct = await product.save(); 
        response.send(savedProduct);
    } catch (error) {
        response.send({message: error}); 
    }
});

// Get specific product 
router.get('/:productId', async (request, response) => {
    // response.send(request.params.productId);

    try {
        const product = await Product.findById(request.params.productId); 
        response.send(product);
    } catch (error) {
        response.send({message: error}); 
    }
}); 

// Update product
router.patch('/:productId', async (request, response) => {
    // response.send(request.body);
    // response.send(request.body.tags); // Dessa hanterar olika delar i objektet, tex .title / .tags / .author etc 
    // response.send(request.params.productId);

    try {
        const updateProduct = await Product.updateOne(
            {_id: request.params.productId},
            {$set: {
                    title:          request.body.title,
                    description:    request.body.description,
                    price:          request.body.price,
                    stock:          request.body.stock,
                    category:       request.body.category,
                    image:          request.body.image
                }
            }
        ); 
        response.send(updateProduct);
    } catch (error) {
        response.send({message: error}); 
    }
}); 

// Delete product
router.delete('/:productId', async (request, response) => {
    // response.send(request.body);
    // response.send(request.body.tags); // Dessa hanterar olika delar i objektet, tex .title / .tags / .author etc 
    // response.send(request.params.productId);

    try {
        const deletedProduct = await Product.deleteOne(
            {_id: request.params.productId},
        ); 
        response.send(deletedProduct);
    } catch (error) {
        response.send({message: error}); 
    }
});

module.exports = router;
