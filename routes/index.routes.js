const express = require("express")
const router = express()

const { productsRouter } = require('./products.routes');
const { categoryRouter } = require('./category.routes');

router.use('/products', productsRouter);
router.use('/category', categoryRouter);
router.use((req, res) => {
    res.status(404).json('Page not found')
});

module.exports = router; 