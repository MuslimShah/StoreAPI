const Products = require('../models/product')
    //THIS ROUTE IS ONLY FOR TESTING
const getAllProductsStatic = async(req, res, next) => {
        const prods = Products.find({})
        let prodList = await prods;
        console.log(prodList);

        res.status(200).json({ msg: 'products recieved static', prodList });
    }
    //GET ALL PRODUCTS
const getAllProducts = async(req, res, next) => {
    const { featured, company, search, sort, select } = req.query;
    const queryObject = {};
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (search) {
        queryObject.name = { $regex: search, $options: 'i' };
    }



    let result = Products.find(queryObject);
    //sort
    if (sort) {
        let sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    }

    //fields
    if (select) {
        let selectList = select.split(',').join(' ');
        result = result.select(selectList);
    }
    let limit = Number(req.query.limit) || 10;
    let page = Number(req.query.page) || 1;
    let skip = (page - 1) * limit;
    result = result.skip(skip).limit(Number(limit))


    let prods = await result;
    res.status(200).json({ numsOfHits: prods.length, prods });

}
module.exports = {
    getAllProducts,
    getAllProductsStatic
}