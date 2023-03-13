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
    const { featured, company, search, sort, select, numericFilter } = req.query;
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


    if (numericFilter) {
        const operatorMap = {
            '>': "$gt",
            '>=': "$gte",
            '=': "$eq",
            '<': "$lt",
            '<=': "$lte",

        }

        //for numeric filters
        const regEx = /AND|OR|and|or|XOR|&&|<=|<|>|>=|!=|=|&|OR*|!/gi
            // const regEx = /\b(<|>|>=|=|<|<=)\b/g

        let filter = numericFilter.replace(regEx, (match) => {
            return `_${operatorMap[match]}_`
        })

        const options = ['price', 'rating'];
        filter = filter.split(',').forEach(items => {
            const [field, operator, value] = items.split('_');
            if (options.includes(field)) {
                queryObject[field] = {
                    [operator]: Number(value)
                };
            }
        })
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