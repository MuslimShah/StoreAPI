require('dotenv').config();
const express = require('express');
const connectDb = require('./db/connect')
    //ERROR HANDLER
const errorHandler = require('./middleware/error-handler');
//PAGE NOT FOUND
const pageNotFound = require('./middleware/not-found')
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
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