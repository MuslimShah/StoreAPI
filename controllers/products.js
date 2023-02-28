const Products = require('../models/product')
const getAllProductsStatic = (req, res, next) => {

    res.status(200).json({ msg: 'products recieved static' });
}
const getAllProducts = async(req, res, next) => {
    const prods = await Products.find();
    res.status(200).json({ prods });
}
module.exports = {
    getAllProducts,
    getAllProductsStatic
}