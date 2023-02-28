require('dotenv').config();
//error handler package
require('express-async-errors')
    //express
const express = require('express');
const connectDb = require('./db/connect')
    //ERROR HANDLER
const errorHandler = require('./middleware/error-handler');
//PAGE NOT FOUND
const pageNotFound = require('./middleware/not-found')
    //routes
const productRoutes = require('./routes/products')

const app = express();
const PORT = process.env.PORT || 3000;
//express json
app.use(express.json());

app.use('/api/v1/products', productRoutes)
app.use(pageNotFound);
app.use(errorHandler)

const start = async() => {
    try {
        // await connectDb(process.env.MONGO_URL);
        app.listen(PORT, () => console.log(`connected to :${PORT}`))

    } catch (error) {
        console.log(`error :${error}`);
    }
}
start();