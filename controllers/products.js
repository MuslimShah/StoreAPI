const Products = require('../models/product')
const getAllProductsStatic = async(req, res, next) => {
    const prods = Products.find({})
    let prodList = await prods;
    console.log(prodList);

    res.status(200).json({ msg: 'products recieved static', prodList });
}
const getAllProducts = async(req, res, next) => {
    const { featured, company, search, sort, select, limit } = req.query;
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
    if (limit) {
        result = result.limit(Number(limit))
    }

    let prods = await result;
    res.status(200).json({ numsOfHits: prods.length, prods });

}
module.exports = {
    getAllProducts,
    getAllProductsStatic
}