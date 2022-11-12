const express = require("express")
//const models = require('../controllers/product.controller'); 

const { getAllProducts, getSearchProducts } = require("../controllers/product.controller")

const productsRouter = express.Router()

productsRouter.get('/', async (req, res) => {
    try {
        const products = await getAllProducts()
        res.send(products);

    } catch (error) {
        return res.status(500).send({ message: 'Something goes wrong in controller: allProducts' })
    }
});

productsRouter.get('/:name', async (req, res) => {
    try {
        const products = await getSearchProducts(req.params.name)

        
        if (products.length <= 0) return res.status(204).json({ message: 'Product not found' })

        res.send(products);

    } catch (error) {
        return res.status(500).send({ message: 'Something goes wrong in controller: searchProducts' })
    }
});

module.exports = { productsRouter }