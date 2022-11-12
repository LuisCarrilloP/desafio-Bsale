const newPool = require('../utils/db.utils'); 

const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        newPool.query('SELECT * FROM product', (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    });
};

const getSearchProducts = (name) => {
    return new Promise((resolve, reject) => {
        newPool.query(`SELECT * FROM product WHERE name LIKE '%${name}%'`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        });
    });
};

module.exports = { getAllProducts, getSearchProducts }