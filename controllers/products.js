const getAllProductsStatic = (req, res, next) => {

    res.status(200).json({ msg: 'products recieved static' });
}
const getAllProducts = (req, res, next) => {
    res.status(200).json({ msg: 'products recieved ' });
}
module.exports = {
    getAllProducts,
    getAllProductsStatic
}