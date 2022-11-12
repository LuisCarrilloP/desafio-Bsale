const newPool = require('../utils/db.utils'); 

const getAllCategories = () => {
    return new Promise((resolve, reject) => {
        newPool.query('SELECT * FROM category', (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    });
};

const getProductsInCategories = (categoryId) => {
    return new Promise((resolve, reject) => {
        return newPool.query('SELECT * FROM category INNER JOIN product ON category.id=product.category WHERE product.category=?', [categoryId], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    });
};

module.exports = { getAllCategories, getProductsInCategories }