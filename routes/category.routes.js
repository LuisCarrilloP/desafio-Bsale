const express = require("express")

const { getAllCategories, getProductsInCategories } = require("../controllers/category.controller")

const categoryRouter = express.Router()

categoryRouter.get('/', async (req, res) => {
    try {
        const categories = await getAllCategories()
        res.send(categories)
    } catch (error) {
        return res.status(500).json({ message: 'Something goes wrong in controller: getAllCategories' })
    }
});

categoryRouter.get('/:categoryId', async (req, res) => {
    try {
        const productsInCategories = await getProductsInCategories(req.params.categoryId)
        res.send(productsInCategories)
    } catch (error) {
        return res.status(500).json({ message: 'Something goes wrong in controller: productsInCategories' })
    }
});

module.exports = { categoryRouter }